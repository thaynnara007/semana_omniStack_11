const express = require('express')
const cors = require('cors')
const app = express()

require('./routes')(app)

app.use(cors)
app.listen(8080)