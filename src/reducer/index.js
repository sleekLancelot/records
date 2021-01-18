import { combineReducers } from 'redux';
import recordReducer from './recordReducer';
import alertReducer from './alertReducer'

export default combineReducers({
    records: recordReducer,
    alert: alertReducer
})