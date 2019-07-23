const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path'); 
const PORT = process.env.PORT || 1337
const db = require('./db')
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()
const dotenv = require('dotenv').config()

const createApp = () => {
  console.log(chalk.red.bgWhite.bold('Building App'))
  const opions = {}

  // !process.env.PORT ?
  //   options = {
  //     key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
  //     cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
  //     requestCert: false,
  //     rejectUnauthorized: false
  //   }
  // :
  //   options = {}

  const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env

  // const server = https.createServer(options, app)

  app.use(volleyball)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded())
  app.use(express.static(path.join(__dirname, '..', 'public'))); 

  app.use(`${process.env.API_URL}`, require('./routes'))
  app.use('/shopify', require('./shopify'))

  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
}

const startListening = () => {
  const run = app.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`)))
}

// app.listen(PORT, () => console.log(chalk.red.bgWhite.bold(`We are live on port ${PORT}`)))
// if(process.env.PORT) {
//   app.listen(PORT, () => console.log(chalk.red.bgWhite.bold(`We are live on port ${PORT}`)))
// } else {
//   server.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${server.address().port}`)))
// }

const sync = () => {
  console.log(chalk.green.bgWhite.bold('Sync Database'))
  return db.sync()
}

if (require.main === module) {
  sync()
  .then(createApp)
  .then(startListening)
} else {
  createApp()
}
