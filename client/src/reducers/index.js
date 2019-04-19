import { ADD_MOOD } from "../constants/action-types";

const initialState = {
    mood: {
        type: '',
        level: '',
        date: '',
        userId: ''
    }
}

export function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_MOOD:
            return Object.assign({}, state, {
                mood: state.mood.concat(action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;