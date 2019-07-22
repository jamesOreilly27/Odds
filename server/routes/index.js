const express = require('express')
const router = express.Router()
const jsonOdds = require('./jsonOdds')
const odds = require('./odds')
const results = require('./results')

router.get('/sports', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/sports')
  .then(res => res.data)
  .then(sports => res.json(sports))
  .catch(console.error)
})

router.use('/odds', odds)
router.use('/results', results)



module.exports = router
