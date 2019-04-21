import { ADD_MOOD, ADD_USER } from '../constants/action-types';

export function addMood(payload){
    return { type: ADD_MOOD, payload};
};

export function addUser(payload){
    return { type: ADD_USER, payload};
};