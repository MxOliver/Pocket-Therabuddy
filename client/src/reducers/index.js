import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { saveMood } from './moodReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    alert, 
    authentication,
    saveMood
})

export default rootReducer;