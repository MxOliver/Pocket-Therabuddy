import { userConstants } from '../constants/userConstants';

exoport function users(state = {}, action) {
    switch(action.type) {
        case userConstants.GETCURRENT_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETCURRENT_SUCCESS:
            return {
                items: action.user
            };
        case userConstants.GETCURRENT_FAILURE:
            return {
                error: action.error
            };
        default: 
            return state;
    }
}