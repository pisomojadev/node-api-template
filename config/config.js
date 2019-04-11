'use strict'

// use the node env to determine which credential file gets used for config.
// each config file needs to be explicitly named for the NODE_ENV environment
// is NODE_ENV is not set, server.js defaults to 'np'
module.exports = require('./env/' + process.env.NODE_ENV + '.js')