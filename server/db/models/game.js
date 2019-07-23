const db = require('../db')
const Sequelize = require('sequelize')

const Game = db.define('game', {
  Sport: { type: Sequelize.STRING, allowNull: false },
  MatchId: { type: Sequelize.STRING, allowNull: false },
  MatchTime: { type: Sequelize.STRING, allowNull: false },
  MoneyLineHome: { type: Sequelize.STRING, allowNull: false },
  PointSpreadHome: { type: Sequelize.STRING, allowNull: false},
  MoneyLineAway: { type: Sequelize.STRING, allowNull: false },
  PointSpreadAway: { type: Sequelize.STRING, allowNull: false},
  TotalNumber: { type: Sequelize.STRING, allowNull: false },
  HomeTeam: { type: Sequelize.STRING, allowNull: false },
  AwayTeam: { type: Sequelize.STRING, allowNull: false },
  HomeScore: { type: Sequelize.STRING, allowNull: true },
  AwayScore: { type: Sequelize.STRING, allowNull: true },
  Final: { type: Sequelize.BOOLEAN, allowNull: false }
})


module.exports = Game
