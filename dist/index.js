
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./termii-node-sdk.cjs.production.min.js')
} else {
  module.exports = require('./termii-node-sdk.cjs.development.js')
}
