import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { saveMood } from './moodReducer';
import { fetchMoods } from './dataReducer';
import { saveHabit } from './habitReducer';
import { fetchHabits } from './habitHistoryReducer';
import { combineReducers } from 'redux';
import { saveSkills } from './skillReducer';

const rootReducer = combineReducers({
    alert, 
    authentication,
    saveMood,
    fetchMoods,
    fetchHabits,
    saveHabit,
    saveSkills
})

export default rootReducer;