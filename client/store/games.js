import axios from "axios";

const GOT_GAMES = 'GOT_GAMES'
const GOT_FINAL_GAMES = 'GOT_FINAL_GAMES'

const gotGames = games => ({
  type: GOT_GAMES,
  payload: games
})

const gotFinalGames = games => ({
  type: GOT_FINAL_GAMES,
  payload: games
})

export const getGamesThunk = sport => dispatch =>
  axios.get(`/api/margretthatcher/tastytendies/odds/${sport}/games`)
  .then(res => dispatch(gotGames(res.data)))
  .catch(err => dispatch(gotGames(err)))

export const getFinalGames = sport => dispatch =>
  axios.get(`/api/margretthatcher/tastytendies/odds/${sport}/final`)
  .then(res => dispatch(gotFinalGames(res.data)))
  .catch(err => dispatch(gotFinalGames(err)))

const reducer = (games = [], action) => {
  switch(action.type) {
    case GOT_GAMES:
      return action.payload
    case GOT_FINAL_GAMES:
      return action.payload
    default:
      return games
  }
}

export default reducer
