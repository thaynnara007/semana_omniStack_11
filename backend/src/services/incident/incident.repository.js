const crypto = require('crypto')
const db = require('../../database/connection')

exports.create = async (incidentInfo) => {

    const {title, description, value, ong_id} = incidentInfo

    const [id] = await db('incidents').insert({
        title,
        description,
        value,
        ong_id,
    })

    return id
}

exports.getAmount = async () => {

    const [ count ] = await db('incidents').count()

    return count
}

exports.getIncidents = async (page) => {
    const incidents = await db('incidents')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    
    return incidents
}

exports.delete = async (id, ong_id) => {

    const incident = await db('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

    if (incident.ong_id !== ong_id) return {status:401, msg: "not authorized"}
    else {
        await db('incidents').where('id', id).delete()

        return {status:204, msg: "deleted"}
    }
}