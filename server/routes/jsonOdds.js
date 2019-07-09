const axios = require('axios')


const jsonOdds = axios.create({
  timeout: 5000,
  headers: { 'x-api-key': process.env.JSON_ODDS_KEY }
})

module.exports = jsonOdds
