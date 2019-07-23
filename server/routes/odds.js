const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const { Game } = require('../db/models')
const jsonOdds = require('./jsonOdds')

const upsert = (values, condition) => {
  return Game.findOne({
    where: condition
  })
  .then(game => {
    if(game) { return game.update(values) }
    else { return Game.create(values) }
  })
  .catch(err => console.log(err))
}

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
  const game = {
    MatchId: req.body.ID,
    MatchTime: req.body.MatchTime,
    HomeTeam: req.body.HomeTeam,
    AwayTeam: req.body.AwayTeam,
    Final: false
  }

  upsert(game, { MatchId: game.MatchId })
  .then(game => res.json(game))
  .catch(next)
})

module.exports = router
