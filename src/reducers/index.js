import todo from './todo'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({todo, routing: routerReducer})