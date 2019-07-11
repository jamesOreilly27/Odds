const express = require('express')
const router = express.Router()
const jsonOdds = require('./jsonOdds')

router.get('/:sport', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/odds/${sportString}?oddType=Game`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})

router.get('/:sport/results', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/results/${sportString}`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})



module.exports = router
