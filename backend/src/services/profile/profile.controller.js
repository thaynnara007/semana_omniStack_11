const repository = require('./profile.repository')

exports.getIncidents = async (req, res) => {

    const id = req.headers.authorization
    const incidents = await repository.getIncidentsByOng(id)

    return res.json(incidents)
}