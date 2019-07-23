import axios from "axios";

const STORE_GAMES = 'STORE_GAMES'
const GOT_GAMES = 'GOT_GAMES'

const storeGames = games => ({
  type: STORE_GAMES,
  payload: games
})

const gotGames = games => ({
  type: GOT_GAMES,
  payload: games
})

export const createGamesThunk = (sport, games) => dispatch => 
  axios.post(`/api/margretthatcher/tastytendies/odds/${sport}/games`, games)
  .then(res => dispatch(storeGames(res.data)))
  .catch(err => dispatch(storeGames(err)))

export const gotGamesThunk = sport => dispatch =>
  axios.get(`/api/margretthatcher/tastytendies/odds/${sport}/games`)
  .then(res => dispatch(gotGames(res.data)))
  .catch(err => dispatch(gotGames(err)))

const reducer = (games = [], action) => {
  switch(action.type) {
    case GOT_GAMES:
      return action.payload
    case STORE_GAMES:
      return [...games, action.payload]
  }
}

export default reducer
