import axios from "axios";

const STORE_GAMES = 'STORE_GAMES'
const GOT_GAMES = 'GOT_GAMES'
const CREATE_GAME = 'CREATE_GAME'

const storeGames = games => ({
  type: STORE_GAMES,
  payload: games
})

const gotGames = games => ({
  type: GOT_GAMES,
  payload: games
})

const createGame = game => ({
  type: CREATE_GAME,
  payload: game
})

export const createGamesThunk = (sport, games) => dispatch => 
  axios.post(`/api/margretthatcher/tastytendies/odds/${sport}/games`, games)
  .then(res => dispatch(storeGames(res.data)))
  .catch(err => dispatch(storeGames(err)))

export const gotGamesThunk = sport => dispatch =>
  axios.get(`/api/margretthatcher/tastytendies/odds/${sport}/games`)
  .then(res => dispatch(gotGames(res.data)))
  .catch(err => dispatch(gotGames(err)))

export const createGameThunk = (sport, game, result) => dispatch => {
  // console.log('RESULT TEST', result)
  const req = Object.assign({}, game, result)
  // console.log('TESTING', req)
  axios.post(`/api/margretthatcher/tastytendies/odds/${sport}/games`, req)
  .then(res => dispatch(createGame(res.data)))
  .catch(err => dispatch(createGame(err)))
}

const reducer = (games = [], action) => {
  switch(action.type) {
    case GOT_GAMES:
      return action.payload
    case STORE_GAMES:
      return [...games, action.payload]
    case CREATE_GAME:
      return [...games, action.payload]
    default:
      return games
  }
}

export default reducer
