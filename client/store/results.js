import axios from 'axios'
import { API_URL } from '../../secrets'

const GOT_RESULTS = 'GOT_RESULTS'

const gotResults = results => ({
  type: GOT_RESULTS,
  payload: results
})

export const gotResultsThunk = sport => dispatch =>
  axios.get(`${API_URL}/results/${sport}`)
  .then(res => dispatch(gotResults(res.data)))
  .catch(err => dispatch(gotResults(err)))

const reducer = (results = [], action) => {
  switch(action.type) {
    case GOT_RESULTS:
      return action.payload
    default:
      return results
  }
}

export default reducer
