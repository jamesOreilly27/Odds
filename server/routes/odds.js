const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const { Game } = require('../db/models')
const jsonOdds = require('./jsonOdds')

router.get('/:sport', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/odds/${sportString}?oddType=Game`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})

router.get('/:sport/games', (req, res, next) => {
  console.log(chalk.blue.bgWhite.bold('hello world'))
  Game.findAll({
    where: { Final: false }
  })
  .then(games => res.json(games))
  .catch(next)
})

router.post('/:sport/games', (req, res, next) => {
  console.log(req.body)
})

module.exports = router
