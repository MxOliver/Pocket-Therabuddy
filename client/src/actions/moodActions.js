import { moodConstants } from '../constants/moodConstants';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';
import { moodService } from '../services/moodService';

export const moodActions = {
    addMood,
    getMoodHistory,
    getHistoryRange,
    getMoodNotes
}

function addMood(mood){
    return dispatch => {
        dispatch(request({ mood }));

        moodService.add(mood).then(mood => {
            dispatch(success(mood));
            history.push('/moodtracker');
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request(mood) { return { type: moodConstants.ADD_MOOD, mood }};
    function success(mood) { return { type: moodConstants.ADD_SUCCESS, mood }};
    function failure(error) { return { type: moodConstants.ADD_ERROR, error }};
}

function getMoodHistory(user){
    return dispatch => {
        dispatch(request());

        moodService.getHistory(user).then(moods => {
            dispatch(success(moods));
        }, 
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request() { return { type: moodConstants.MOODHISTORY_REQUEST }};
    function success(moods) { return { type: moodConstants.MOODHISTORY_SUCCESS, moods }};
    function failure(error) { return { type: moodConstants.MOODHISTORY_FAILURE, error }};
}

function getMoodNotes(user){
    return dispatch => {
        dispatch(request());

        moodService.getNotes(user).then(notes => {
            dispatch(success(notes));
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request() { return { type: moodConstants.NOTE_REQUEST }};
    function success(notes) { return { type: moodConstants.NOTE_SUCCESS, notes }};
    function failure(error) { return { type: moodConstants.NOTE_FAILURE, error }};
}

function getHistoryRange(user){
    return dispatch => {
        dispatch(request());

        moodService.getDateRange(user).then(date => {
            dispatch(success(date));
        }, 
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request() { return { type: moodConstants.DATE_REQUEST }};
    function success(date) { return { type: moodConstants.DATE_SUCCESS, date }};
    function failure(error) { return { type: moodConstants.DATE_FAILURE, error }};
}
