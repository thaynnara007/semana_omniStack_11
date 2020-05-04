const repository = require('./session.repository')

exports.create = async (req, res) => {

    const { id } = req.body
    const ong = await repository.create(id)

    if (!ong) return res.status(400).json({error: 'ONG nao encontrada'})
    else return res.json(ong)
}