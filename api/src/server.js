import express from 'express';
import { Kafka } from 'kafkajs'
import routes from './routes'

const app = express();

/**
 * Faz conexão com o kafka
 */
const kafka = new Kafka({
    clientId: 'api', // identificador 
    brokers: ['localhost:9091'] // instancia do kafka // ele usou docker (?) 31:11
})

const producer = kafka.producer()

/**
 * Disponibiliza o producer para todas as rotas
 */
app.use((req, res, next) => {
    req.producer = producer;
    return next()
})

/**
 * Cadastra as rotas da aplicação
 */
app.use(routes)

async function run() {
    await producer.connect();

    app.listen(3333)
}

run().catch(console.error);


