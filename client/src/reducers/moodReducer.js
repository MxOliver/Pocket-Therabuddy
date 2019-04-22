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
        case moodConstants.MOODHISTORY_REQUEST:
            return {
                loading: true
            };
        case moodConstants.MOODHISTORY_SUCCESS:
            return {
                items: action.moods
            };
        case moodConstants.MOODHISTORY_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}