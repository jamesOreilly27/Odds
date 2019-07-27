import axios from "axios";
import { API_URL } from '../../secrets'

const GOT_GAMES = 'GOT_GAMES'

const gotGames = games => ({
  type: GOT_GAMES,
  payload: games
})

export const getGamesThunk = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/games`)
  .then(res => dispatch(gotGames(res.data)))
  .catch(err => dispatch(gotGames(err)))

const reducer = (finalGames = [], action) => {
  switch(action.type) {
    case GOT_GAMES:
      return action.payload
    default:
      return games
  }
}

export default reducer
