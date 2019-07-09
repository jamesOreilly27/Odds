const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path'); 
const PORT = process.env.PORT || 8332
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()

const options = {
  key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
  cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
  requestCert: false,
  rejectUnauthorized: false
}

const server = https.createServer(options, app)

app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use('/api', require('./routes'))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
if(PORT === 8332) {
  server.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${server.address().port}`)))
} else {
  app.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`)))
}
