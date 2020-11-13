import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import MoviesReducer from './reducers/MoviesReducer'
import FavoritesReducer from './reducers/FavoritesReducer'

const reducer = combineReducers({
  MoviesReducer,
  FavoritesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store