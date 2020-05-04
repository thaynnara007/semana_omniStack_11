const express = require('express')
const controller = require('./incident.controller')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json());
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

router.get('/', controller.getIncidents)
router.post('/', controller.create)
router.put('/')
router.delete('/:id', controller.delete)

module.exports = router