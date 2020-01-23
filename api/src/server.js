import express from 'express';

const app = express();

app.get('/certifications', (req, res) => {
    // chamar micro servico
    return res.json({ ok: true })
})

app.listen(3333)