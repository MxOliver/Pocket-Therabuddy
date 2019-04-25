import { moodConstants } from '../constants/moodConstants';

let moods = JSON.parse(localStorage.getItem('moods'));

const initialSate = moods ? { fetched: true, moods } : {};

export function fetchMoods(state = initialSate, action){
    switch(action.type){
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
        default:
            return state;
    }
}