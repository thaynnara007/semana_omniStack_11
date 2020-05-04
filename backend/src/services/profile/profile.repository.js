const db = require('../../database/connection')

exports.getIncidentsByOng = async (ong_id) => {
    
    const incidents = await db('incidents')
        .select('*')
        .where('ong_id', ong_id)

    return incidents
}