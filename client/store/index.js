import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import odds from './odds'
import activeSport from './activeSport'
import games from './games'

const reducer = combineReducers({ odds, activeSport, games })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export * from './odds'
export * from './activeSport'
export * from './games'

export default store
