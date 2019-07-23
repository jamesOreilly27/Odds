const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const jsonOdds = require('./jsonOdds')

router.get('/:sport', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/results/${sportString}?oddType=game`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})

module.exports = router
