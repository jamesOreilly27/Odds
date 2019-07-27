import axios from 'axios'
import { API_URL } from '../../secrets'

const GOT_FINAL_GAMES = 'GOT_FINAL_GAMES'

const gotFinalGames = games => ({
  type: GOT_FINAL_GAMES,
  payload: games
})

export const getFinalGames = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/final`)
  .then(res => dispatch(gotFinalGames(res.data)))
  .catch(err => dispatch(gotFinalGames(err)))

const reducer = (games = [], action) => {
  switch(action.type) {
    case GOT_FINAL_GAMES:
      return action.payload
    default:
      return games
  }
}

export default reducer