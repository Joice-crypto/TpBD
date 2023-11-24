import { Pool, QueryResult } from 'pg';

interface Global {
    connection?: Pool;
}

declare const global: Global;

export async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING,
    });

    // apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res: QueryResult = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    // guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}