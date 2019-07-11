import axios from 'axios'

const GOT_ODDS = 'GOT_ODDS'

const gotOdds = odds => ({
  type: GOT_ODDS,
  payload: odds
})

export const fetchOddsBySport = sport => dispatch =>
  axios.get(`/api/${sport}`)
  .then(res => dispatch(gotOdds(res.data)))
  .catch(err => dispatch(gotOdds(err.message)))

const reducer = (odds = [], action) => {
  switch(action.type) {
    case GOT_ODDS:
      return action.payload
    default:
      return odds
  }
}

export default reducer
