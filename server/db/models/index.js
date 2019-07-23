const Game = require('./game')
const Result = require('./result')

/********** Associations **********/
Result.belongsTo(Game)
Game.hasOne(Result)

Game.addScope('with-results', {
  include: [
    { model: Result }
  ]
})


module.exports  = { Game, Result }
