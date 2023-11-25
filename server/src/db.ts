import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "joice223",
  port: 5432,
});

client.connect();

export default client;