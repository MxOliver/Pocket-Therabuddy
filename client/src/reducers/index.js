import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    alert, 
    authentication
})

export default rootReducer;