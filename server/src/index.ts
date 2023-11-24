import fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { connect }  from '../src/db'


const app = fastify();


dotenv.config();
// faz a conecção com o banco de dados 
const db = connect();

app.register(cors, {
    origin: true,
})

app.listen({ port: 3333  }).then(() => {
    console.log('Server is runing')
})