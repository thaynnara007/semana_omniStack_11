const ong = require('./services/ong/ong.router')
const incident = require('./services/incident/incident.router')
const profile = require('./services/profile/profile.router')
const session = require('./services/session/session.router')

module.exports = (app) => {
    app.use('/ongs', ong);
    app.use('/incident', incident)
    app.use('/profile', profile)
    app.use('/session', session)
}