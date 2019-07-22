const express = require('express')
const router = express.Router()
const jsonOdds = require('./jsonOdds')
const odds = require('./odds')

router.get('/sports', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/sports')
  .then(res => res.data)
  .then(sports => res.json(sports))
  .catch(console.error)
})

router.get('/:sport/results', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/results/${req.params.sport}?oddType=game`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})

router.use('/odds', odds)



module.exports = router
