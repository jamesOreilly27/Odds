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

const chooseOdds = (obj, string) => {
  if(obj.Odds) {
    return obj.Odds[0][string]
  }
  else {
    return obj[string]
  }
}

const chooseId = obj => {
  if(obj.ID) {
    return obj.ID
  }
  else {
    return obj.MatchId
  }
}

router.get('/:sport', (req, res, next) => {
  const sportString = req.params.sport
  jsonOdds.get(`https://jsonodds.com/api/odds/${sportString}?oddType=Game`)
  .then(res => res.data)
  .then(details => res.json(details))
  .catch(console.error)
})

router.get('/:sport/games', (req, res, next) => {
  Game.findAll({
    where: { Final: false, Sport: req.params.sport }
  })
  .then(games => res.json(games))
  .catch(next)
})

router.post('/:sport/games', (req, res, next) => {
  const game = {
    Sport: req.params.sport,
    MatchId: chooseId(req.body),
    MatchTime: req.body.MatchTime,
    MoneyLineHome: chooseOdds(req.body, 'MoneyLineHome'),
    PointSpreadHome: chooseOdds(req.body, 'PointSpreadHome'),
    MoneyLineAway: chooseOdds(req.body, 'MoneyLineAway'),
    PointSpreadAway: chooseOdds(req.body, 'PointSpreadAway'),
    TotalNumber: chooseOdds(req.body, 'TotalNumber'),
    HomeTeam: req.body.HomeTeam,
    AwayTeam: req.body.AwayTeam,
    HomeScore: req.body.HomeScore,
    AwayScore: req.body.AwayScore,
    Final: req.body.Final
  }

  console.log(chalk.red.bgWhite.bold(game.HomeScore))
  console.log(chalk.blue.bgWhite.bold(game.AwayScore))

  upsert(game, { MatchId: game.MatchId })
  .then(game => res.json(game))
  .catch(next)
})

module.exports = router
