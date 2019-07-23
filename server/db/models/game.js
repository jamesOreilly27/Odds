const db = require('../db')
const Sequelize = require('sequelize')

const Game = db.define('game', {
  MatchId: { type: Sequelize.STRING, allowNull: false },
  MatchTime: { type: Sequelize.STRING, allowNull: false },
  HomeTeam: { type: Sequelize.STRING, allowNull: false },
  AwayTeam: { type: Sequelize.STRING, allowNull: false },
  HomeScore: { type: Sequelize.STRING, allowNull: true },
  AwayScore: { type: Sequelize.STRING, allowNull: true },
  Final: { type: Sequelize.BOOLEAN, allowNull: false }
})


module.exports = Game
