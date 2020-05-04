const crypto = require('crypto')
const db = require('../../database/connection')

exports.create = async (ongInfo) => {

    const {name, email, whatsapp, city, uf} = ongInfo
    const id = crypto.randomBytes(4).toString('HEX')

    await db('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return id
}

exports.getOngs = async () => {
    const ongs = await db('ongs').select('*')
    
    return ongs
}

exports.getIncidentsByOng = async (ong_id) => {
    
    const incidents = await db('incidents')
        .select('*')
        .where('ong_id', ong_id)

    return incidents
}