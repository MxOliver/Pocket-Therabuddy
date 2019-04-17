import { ADD_MOOD } from '../constants/action-types';

export function addMood(payload){
    return { type: ADD_MOOD, payload};
};
