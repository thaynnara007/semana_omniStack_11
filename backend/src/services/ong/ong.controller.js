const repository = require('./ong.repository')

exports.create = async (req, res) => {
    
    const id = await repository.create(req.body)

    if (id) return res.json({mensagem: 'ong cadastrada com sucesso', id: id})
    else return res.json({mensagem: "algo deu errado"})
}

exports.getOngs = async (req, res) => {

    const ongs = await repository.getOngs()

    if (ongs) return res.json(ongs)
    else return res.json("nao existe nenhuma ong")
}

exports.getIncidentsByOng = async (req, res) => {

    const id = req.headers.authorization
    const incidents = await repository.getIncidentsByOng(id)

    return res.json(incidents)
}