import express from 'express';

const routes =  new express.Router();

routes.get('/certifications', async (req, res) => {
    // chamar micro servico
    console.log(req.producer);
    return res.json({ ok: true })
})

export default routes;