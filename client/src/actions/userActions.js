import { userConstants } from '../constants/userConstants';
import { alertActions } from './alertActions';
import { userService } from '../services/userService';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
    register,
    getCurrentUser,
    delete: _delete
};

function login(email, password){
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password).then( user => {
            if(user.error === "not found"){
                dispatch(failure("invalid email or password"));
                dispatch(alertActions.error("invalid email or password"));
            } else {
                dispatch(success(user));
                history.push('/dashboard');
            }
        },
        error => {
            dispatch(failure(error.toString()));
            console.log(error.toString());
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }};
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }};
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }};
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getCurrentUser() {
    return dispatch => {
        dispatch(request());

        userService.getCurrent().then(
            user => dispatch(success(user)),
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: userConstants.GETCURRENT_REQUEST }};
    function success(user) { return { type: userConstants.GETCURRENT_SUCCESS, user }};
    function failure(error) { return { type: userConstants.GETCURRENT_FAILURE, error }};
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user).then(
            user => {
                dispatch(success());
                history.push('/sign_in');
                dispatch(alertActions.success('Account creation successful'));
            }, 
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user }};
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }};
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }};
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}