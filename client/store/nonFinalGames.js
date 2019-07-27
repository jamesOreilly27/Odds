import axios from 'axios'
import { API_URL } from '../../secrets'

const GOT_NON_FINAL_GAMES = 'GOT_NON_FINAL_GAMES'

const gotNonFinalGames = games => ({
  type: GOT_NON_FINAL_GAMES,
  payload: games
})

export const getNonFinalGames = sport => dispatch =>
  axios.get(`${API_URL}/odds/${sport}/nonfinal`)
  .then(res => dispatch(gotNonFinalGames(res.data)))
  .catch(err => dispatch(gotNonFinalGames(err)))

const reducer = (nonFinalGames = [], action) => {
  switch(action.type) {
    case GOT_NON_FINAL_GAMES:
      return action.payload
    default:
      return nonFinalGames
  }
}

export default reducer
