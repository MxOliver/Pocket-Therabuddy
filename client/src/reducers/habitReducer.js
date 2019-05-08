import { habitConstants } from '../constants/habitConstants';

export function saveHabit(state = {}, action){
    switch(action.type){
        case habitConstants.ADD_HABIT_REQUEST:
            return {
                addingHabit: true,
                habit: action.habit
            };
        case habitConstants.ADD_HABIT_SUCCESS:
            return {
                habitAdded: true,
                habit: action.habit
            };
        case habitConstants.ADD_HABIT_FAILURE:
            return {};
        case habitConstants.REMOVE_NOTE_REQUEST:
            return {
                removing: true,
                habitId: action.value
            };
        case habitConstants.REMOVE_NOTE_SUCCESS:
            return {
                removed: true,
                habitId: action.value
            }
        case habitConstants.REMOVE_NOTE_FAILURE:
            return {};
        default:
            return state;
    }
}