import axios from "axios";
import { API_URL } from '../../secrets'

const GOT_GAMES = 'GOT_GAMES'
const GOT_NON_FINAL_GAMES = 'GOT_NON_FINAL_GAMES'
const GOT_FINAL_GAMES = 'GOT_FINAL_GAMES'

const gotGames = games => ({
  type: GOT_GAMES,
  payload: games
})

const gotFinalGames = games => ({
  type: GOT_FINAL_GAMES,
  payload: games
})

const gotNonFinalGames = games => ({
  type: GOT_NON_FINAL_GAMES,
  payload: games
})

export const getGamesThunk = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/games`)
  .then(res => dispatch(gotGames(res.data)))
  .catch(err => dispatch(gotGames(err)))

export const getFinalGames = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/final`)
  .then(res => dispatch(gotFinalGames(res.data)))
  .catch(err => dispatch(gotFinalGames(err)))

export const getNonFinalGames = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/nonfinal`)
  .then(res => dispatch(gotNonFinalGames(res.data)))
  .catch(err => dispatch(gotNonFinalGames(err)))

const reducer = (games = [], action) => {
  switch(action.type) {
    case GOT_GAMES:
      return action.payload
    case GOT_FINAL_GAMES:
      return action.payload
    case GOT_NON_FINAL_GAMES:
      return action.payload
    default:
      return games
  }
}

export default reducer
