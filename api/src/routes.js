import  express  from express;

const routes =  new express.Router();

routes.get('/certifications', async (req, res) => {
    // chamar micro servico
    return res.json({ ok: true })
})

export default routes;