const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./session.controller')

const router = express.Router()

router.use(bodyParser.json());
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})


router.post('/', controller.create)

module.exports = router