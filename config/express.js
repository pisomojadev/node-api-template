'use strict'

const config = require('./config')
const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

// documentation
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/swagger.yaml')

// logging
const morgan = require('morgan')
const winston = require('winston')

module.exports = () => {
    let app = express()

    // set default logging
    winston.add(winston.transports.File, { filename: 'app.log' })

    // env specific logging
    if (process.env.NODE_ENV !== 'production') {
        app.use(morgan('dev'))
    } else {
        winston.remove(winston.transports.Console)
        winston.remove(winston.transports.File)
    }

    // configure request body parsing and http methods
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(methodOverride())

    // set routing
    require('../app/routes/services.js')(app)

    // set swagger routing
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

    // catch favicon requests (log annoyance)
    app.get('/favicon.ico', function (req, res) {
        res.status(204)
    })

    // error routing
    app.use(function (req, res) {
        res.status(404).send()
    })

    return app
}