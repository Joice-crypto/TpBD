import fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import client from "./db";
import { timesRoutes } from './routes/times'
import { campeonatoRoutes } from './routes/campeonato';
import { partidasRoutes } from './routes/partidas';

const app = fastify();


dotenv.config();

app.register(timesRoutes)  
app.register(campeonatoRoutes) 
app.register(partidasRoutes) 

app.register(cors, {
    origin: true,
})

app.listen({ port: 3333  }).then(() => {
    console.log('Server is runing')
})