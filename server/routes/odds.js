const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const { Game } = require('../db/models')
const jsonOdds = require('./jsonOdds')
const TTL = process.env.CACHE_TTL || 60
const nodecache = require('node-cache')
const cache = new nodecache({stdTTL: TTL})

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
  let apiURL = `https://jsonodds.com/api/odds/${sportString}?oddType=Game`
  let apiData = cache.get(apiURL)
  if(apiData){
    res.json(apiData)
  } else {
    jsonOdds.get(apiURL)
    .then(res => res.data)
    .then(function (details) {
      res.json(details)
      cache.set(apiURL, details)
    })
    .catch(console.error)
  }
})

router.get('/:sport/games', (req, res, next) => {
  Game.findAll({
    where: { Sport: req.params.sport }
  })
  .then(games => res.json(games))
  .catch(next)
})

router.get('/:sport/:final', (req, res, next) => {
  let final
  req.params.final === 'final' ? final = true : final = false
  Game.findAll({
    where: { Sport: req.params.sport, Final: final }
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
    PointSpreadHomeLine: chooseOdds(req.body, 'PointSpreadHomeLine'),
    MoneyLineAway: chooseOdds(req.body, 'MoneyLineAway'),
    PointSpreadAway: chooseOdds(req.body, 'PointSpreadAway'),
    PointSpreadAwayLine: chooseOdds(req.body, 'PointSpreadAwayLine'),
    TotalNumber: chooseOdds(req.body, 'TotalNumber'),
    OverLine: chooseOdds(req.body, 'OverLine'),
    UnderLine: chooseOdds(req.body, 'UnderLine'),
    HomeTeam: req.body.HomeTeam,
    AwayTeam: req.body.AwayTeam,
    HomeScore: req.body.HomeScore,
    AwayScore: req.body.AwayScore,
    Final: req.body.Final
  }


  upsert(game, { MatchId: game.MatchId })
  .then(game => res.json(game))
  .catch(next)
})

module.exports = router
