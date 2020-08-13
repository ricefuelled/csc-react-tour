import {combineReducers} from 'redux'
import {isTourOpenReducer} from './isTourOpenReducer'

export default combineReducers({
  isTourOpen: isTourOpenReducer,
});