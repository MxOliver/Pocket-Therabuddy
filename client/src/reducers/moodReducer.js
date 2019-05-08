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
                fetching: true,
                moods: action.moods
            };
        case moodConstants.MOODHISTORY_SUCCESS:
            return {
                fetched: true,
                moods: action.moods
            };
        case moodConstants.MOODHISTORY_FAILURE:
            return {
                error: action.error
            };
        case moodConstants.REMOVE_MOODNOTE_REQUEST: 
            return {
                removingMoodnote: true
            };
        case moodConstants.REMOVE_MOODNOTE_SUCCESS:
            return {
                moodnoteRemoved: true
            };
        case moodConstants.REMOVE_MOODNOTE_FAILURE:
            return {};
        default:
            return state;
    }
}