const SWITCH_SPORT = 'SWITCH_SPORT'

const switchSport = sportString => ({
  type: SWITCH_SPORT,
  payload: sportString
})

export const updateActiveSport = sport => dispatch => {
  let value
  typeof sport === 'string' ?
    value = dispatch(switchSport(sport))
    :
    value =dispatch(switchSport('EXPECTED STRING'))

  return value
}

const reducer = (activeSport = 'nfl', action) => {
  switch(action.type) {
    case SWITCH_SPORT:
      return action.payload
    default:
      return activeSport
  }
}

export default reducer
