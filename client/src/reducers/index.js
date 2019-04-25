import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { saveMood } from './moodReducer';
import { fetchMoods } from './dataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    alert, 
    authentication,
    saveMood,
    fetchMoods
})

export default rootReducer;