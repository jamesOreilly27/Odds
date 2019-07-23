const db = require('../db')
const Sequelize = require('sequelize')

const Game = db.define('game', {
  MatchId: { type: Sequelize.STRING, allowNull: false },
  MatchTime: { type: Sequelize.STRING, allowNull: false },
  HomeTeam: { type: Sequelize.STRING, allowNull: false },
  AwayTeam: { type: Sequelize.STRING, allowNull: false },
  Final: { type: Sequelize.BOOLEAN, allowNull: false }
})


module.exports = Game
