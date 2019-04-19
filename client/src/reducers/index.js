import { ADD_MOOD, ADD_USER } from "../constants/action-types";

const initialState = {
    mood: [{
        type: '',
        level: '',
        notes: '',
        date: '',
        userId: ''
    }],
    user: [{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }],
}

export function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_MOOD:
            return Object.assign({}, state, {
                mood: state.mood.concat(action.payload)
            });
        case ADD_USER:
            return Object.assign({}, state, {
                user: state.user.concat(action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;