const axios = require('axios')


const jsonOdds = axios.create({
  timeout: 5000,
  headers: { 'x-api-key': 'e7a1a157-5667-4fa8-bb7c-5defaf8092d3' }
})

module.exports = jsonOdds
