import { habitConstants } from '../constants/habitConstants';

let habits = JSON.parse(localStorage.getItem('habits'));

const initialSate = habits ? {habitsFetched: true, habits} : {};

export function fetchHabits(state = initialSate, action){
    switch(action.type){
        case habitConstants.HABIT_HISTORY_REQUEST:
            return {
                habitsFetching: true,
                habits: action.habits
            };
        case habitConstants.HABIT_HISTORY_SUCCESS:
            return {
                habitsFetched: true,
                habits: action.habits
            };
        case habitConstants.HABIT_HISTORY_FAILURE:
            return {};
        case habitConstants.HABIT_NOTES_REQUEST:
            return {
                fetchingNotes: true,
                habitNotes: action.notes
            };
        case habitConstants.HABIT_NOTES_SUCCESS:
            return {
                fetchedNotes: true,
                habitNotes: action.notes
            };
        case habitConstants.HABIT_NOTES_FAILURE:
            return {};
        default:
            return state;
    }
}