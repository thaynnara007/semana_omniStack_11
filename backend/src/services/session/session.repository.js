const db = require('../../database/connection')

exports.create = async (id) => {

    const ong = await db('ongs')
        .select('name')
        .where('id', id)
        .first()
    
    return ong
}