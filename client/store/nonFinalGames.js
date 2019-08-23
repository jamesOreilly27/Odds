import axios from 'axios'

const GOT_NON_FINAL_GAMES = 'GOT_NON_FINAL_GAMES'
const CLEAR_NON_FINAL_GAMES = 'CLEAR_NON_FINAL_GAMES'

const gotNonFinalGames = games => ({
  type: GOT_NON_FINAL_GAMES,
  payload: games
})

export const clearNonFinalGames = () => ({
  type: CLEAR_NON_FINAL_GAMES,
  payload: []
})

export const getNonFinalGamesThunk = sport => dispatch =>
  axios.get(`${process.env.API_URL}/odds/${sport}/nonfinal`)
  .then(res => dispatch(gotNonFinalGames(res.data)))
  .catch(err => dispatch(gotNonFinalGames(err)))

const reducer = (nonFinalGames = [], action) => {
  switch(action.type) {
    case GOT_NON_FINAL_GAMES:
      return action.payload
    case CLEAR_NON_FINAL_GAMES:
      return action.payload
    default:
      return nonFinalGames
  }
}

export default reducer
