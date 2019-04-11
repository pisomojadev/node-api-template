'use strict'

const winston = require('winston')

process.env.NODE_ENV = process.env.NODE_ENV || 'np'

const port = process.env.PORT ? process.env.PORT : 3000

const express = require('./config/express')
const app = express()

app.listen(port)

module.exports = app

winston.info('*** Jerk Detected! Server running on port ' + port)
