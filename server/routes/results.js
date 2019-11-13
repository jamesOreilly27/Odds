const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const jsonOdds = require('./jsonOdds')
const TTL = process.env.CACHE_TTL || 60
const nodecache = require('node-cache')
const cache = new nodecache({stdTTL: TTL})

router.get('/:sport', (req, res, next) => {
  const sportString = req.params.sport
  let apiURL = `https://jsonodds.com/api/results/${sportString}?oddType=game`
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

module.exports = router
