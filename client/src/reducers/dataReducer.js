import { dataConstants } from '../constants/dataConstants';


export function addData(state = {}, action){
    switch(action.type){
        case dataConstants.ADD_MOOD_HISTORY:
            return {
                data: action.payload
            };
        default:
            return state;
    }
}