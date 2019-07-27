import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import odds from './odds'
import activeSport from './activeSport'
import games from './games'
import singleGame from './singleGame'
import results from './results'
import finalGames from './finalGames'
import nonFinalGames from './nonFinalGames'

const reducer = combineReducers({ odds, activeSport, games, results, singleGame, finalGames, nonFinalGames })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export * from './odds'
export * from './activeSport'
export * from './games'
export * from './finalGames'
export * from './nonFinalGames'
export * from './singleGame'
export * from './results'

export default store
