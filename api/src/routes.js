import express from 'express';

const routes =  new express.Router();

routes.get('/certifications', async (req, res) => {
    const message = {
        user: { id: 1, name: 'Talita Oliveira' },
        course:  'Kafka com NodeJS',
        grade: 5 
    }


    // chamar micro servico
    await req.producer.send({
        topic: 'certificates',
        messages: [
            { value: JSON.stringify(message) }
        ]
    })
    .then(console.log)
    .catch(e => console.error(`[example/producer] ${e.message}`, e))
    return res.json({ ok: true })
})

export default routes;