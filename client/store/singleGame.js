import axios from 'axios'

const CREATE_GAME = 'CREATE_GAME'

const createGame = game => ({
  type: CREATE_GAME,
  payload: game
})

export const createGameThunk = (sport, game, result) => dispatch => {
  const req = Object.assign({}, game, result)
  axios.post(`/api/margretthatcher/tastytendies/odds/${sport}/games`, req)
  .then(res => dispatch(createGame(res.data)))
  .catch(err => dispatch(createGame(err)))
}

const reducer = (game = {}, action) => {
  switch(action.type) {
    case CREATE_GAME:
      return action.payload
    default:
      return game
  }
}

export default reducer
