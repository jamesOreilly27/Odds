const db = require('../db')
const Sequelize = require('sequelize')

const Game = db.define('game', {
  MatchId: { type: Sequelize.STRING, allowNull: false },
  MatchTime: { type: Sequelize.STRING, allowNull: false },
  HomeAbbrev: { type: Sequelize.STRING, allowNull: false },
  awayAbbrev: { type: Sequelize.STRING, allowNull: false },
  final: { type: Sequelize.BOOLEAN, allowNull: false }
})


module.exports = { Game }
