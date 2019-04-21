import { moodConstants } from '../constants/moodConstants';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';
import { moodService } from '../services/moodService';

export const moodActions = {
    addMood
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
