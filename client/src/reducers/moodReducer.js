import { moodConstants } from '../constants/moodConstants';

export function saveMood(state = {}, action){
    switch(action.type){
        case moodConstants.ADD_MOOD:
            return {
                addingMood: true,
                mood: action.mood
            };
        case moodConstants.ADD_SUCCESS:
            return {
                moodAdded: true,
                mood: action.mood
            };
        case moodConstants.ADD_ERROR:
            return {};
        default:
            return state;
    }
}