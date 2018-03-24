const Promise = require('bluebird')
const rek = require('rekuire')
const setupExpress = rek('setup-express')


setupExpress
        .initialize()
        .then(setupExpress.preRoutesInitalization)
        .then(setupExpress.createRoutes)
        .then(setupExpress.postRoutesInitalization)
        .then(setupExpress.listen)
        .catch(err => {
          console.log('********* Error during startup ********* \r\n')
          console.log(err)
          console.log('********************************* \r\n')
        })
