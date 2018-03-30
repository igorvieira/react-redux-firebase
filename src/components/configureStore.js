import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import { routerMiddleware } from 'react-router-redux'


export default (history) => {
  let middlewares = [thunk, routerMiddleware(history)]
  let store = createStore(reducers, applyMiddleware(...middlewares))
  return store
}