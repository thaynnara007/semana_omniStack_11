const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./ong.controller')

const router = express.Router()

router.use(bodyParser.json());
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

router.get('/', controller.getOngs)
router.post('/', controller.create)
router.put('/')
router.delete('/')

module.exports = router