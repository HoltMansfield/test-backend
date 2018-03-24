const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const ips = require('./ips')


// the first method called during server startup
const initialize = () => {
  const app = express()

  return Promise.resolve(app)
}

// Middleware that needs to be configured BEFORE routes are created
const preRoutesInitalization = app => {
  // enable CORS
  app.use(cors())

  // parse application/json
  app.use(bodyParser.json())

  // enable all options requests
  app.options('*', cors())

  return Promise.resolve(app)
}

// the actual routes the app handles
const createRoutes = app => {
  app.get('/ips', (req, res) => {
    const ipList = ips.getIps(req.ip)

    return res.json({
      ipList
    })
  })

  app.get('/', (req, res) => {
    const stamp = new Date().toString()
    const env = process.env.NODE_ENV
    res.send(`Everything up, node is running ${stamp}. We are currently running in ${env}`);
  })

  return Promise.resolve(app)
}

// Middleware that needs to be configured AFTER routes are created
const postRoutesInitalization = app => {
  app.use((err, req, res, next) => {
    console.log('********* Error handled ********* \r\n')
    console.log(err)
    console.log('********************************* \r\n')
  })

  return Promise.resolve(app)
}

// The actual http listener
const listen = app => {
  // default to port 300
  process.env.PORT = process.env.PORT || 3000;

  // default to the development environment
  process.env.NODE_ENV = 'development';

  app.set('port', process.env.PORT);

  app.listen(app.get('port'), () => {
     console.log(`Server is listening on ${app.get('port')}`)
     return Promise.resolve(app)
  })
}

module.exports = {
  initialize,
  preRoutesInitalization,
  createRoutes,
  postRoutesInitalization,
  listen
}
