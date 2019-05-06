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
        case moodConstants.NOTE_REQUEST:
            return {
                noteFetching: true,
                notes: action.notes
            };
        case moodConstants.NOTE_SUCCESS:
            return {
                noteFetched: true,
                notes: action.notes
            };
        case moodConstants.NOTE_FAILURE:
            return {};
        case moodConstants.DATE_REQUEST:
            return {
                dateFetching: true,
                date: action.date
            };
        case moodConstants.DATE_SUCCESS:
            return {
                dateFetched: true,
                date: action.date
            }
        case moodConstants.DATE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}