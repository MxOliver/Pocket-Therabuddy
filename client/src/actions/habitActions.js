import { habitConstants } from '../constants/habitConstants';
import { alertActions } from './alertActions';
import { habitService } from '../services/habitService';
import { history } from '../helpers/history';

export const habitActions = {
    create,
    fetchHistory,
    getHabitNotes
}

function create(habit){
    return dispatch => {
        dispatch(request({ habit }));

        habitService.addHabit(habit).then((habit) => {
            dispatch(success(habit));
            history.push('/habittracker');
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(habit) { return { type: habitConstants.ADD_HABIT_REQUEST, habit }};
    function success(habit) { return { type: habitConstants.ADD_HABIT_SUCCESS, habit }};
    function failure(error) { return { type: habitConstants.ADD_HABIT_FAILURE, error }};
}

function fetchHistory(id){
    return dispatch => {
        dispatch(request());

        habitService.getHistory(id).then((habits) => {
            dispatch(success(habits));

        },
        error => {
            request(failure(error.toString()));
            request(alertActions.error(error.toString()));
        })
    }

    function request() { return { type: habitConstants.HABIT_HISTORY_REQUEST }};
    function success(habits) { return { type: habitConstants.HABIT_HISTORY_SUCCESS, habits }};
    function failure(error) { return { type: habitConstants.HABIT_HISTORY_FAILURE, error }}; 
}

function getHabitNotes(id) {
    return dispatch => {
        dispatch(request());

        habitService.getNotes(id).then((notes) => {
            dispatch(success(notes));

        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request() { return { type: habitConstants.HABIT_NOTES_REQUEST }};
    function success(notes) { return { type: habitConstants.HABIT_NOTES_SUCCESS, notes }};
    function failure(error) { return { type: habitConstants.HABIT_NOTES_FAILURE, error }}; 
}