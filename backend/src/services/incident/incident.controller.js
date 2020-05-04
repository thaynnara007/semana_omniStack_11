const repository = require('./incident.repository')

exports.create = async (req, res) => {
    
    const ong_id = req.headers.authorization
    req.body.ong_id = ong_id
    
    const id = await repository.create(req.body)

    if (id) return res.json({mensagem: 'incidente cadastrado com sucesso', id: id})
    else return res.json({mensagem: "algo deu errado"})
}

exports.getIncidents = async (req, res) => {

    const { page = 1 } = req.query
    const incidents = await repository.getIncidents(page)
    const amount = await repository.getAmount()

    res.header('X-Total-Count', amount['count(*)'])

    if (incidents) return res.json(incidents)
    else return res.json("nao existe nenhum incidente")
}

exports.delete = async (req, res) => {

    const { id } = req.params
    const ong_id = req.headers.authorization

    const result = await repository.delete(id, ong_id)

    return res.status(result.status).json(result.msg)
}