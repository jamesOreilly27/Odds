const db = require('../db')
const Sequelize = require('sequelize')

const Result = db.define('result', {
  ResultId: { type: Sequelize.STRING, allowNull: false },
  HomeScore: { type: Sequelize.STRING, allowNull: false },
  AwayScore: { type: Sequelize.STRING, allowNull: false },
  Final: { type: Sequelize.STRING, allowNull: false, defaultValue: false }
})

module.exports = Result
