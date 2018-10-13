var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  /*BASE_API: '"http://59.110.216.168:8080/melody"'*/
})
