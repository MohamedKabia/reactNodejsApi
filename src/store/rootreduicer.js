import taskreduicer from './tasksreduicer'
import authreduicer from './authreduicer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth:authreduicer,
    tasks:taskreduicer
})
export default rootReducer