import { dataConstants } from '../constants/dataConstants';

export const dataActions = {
    addMoodHistory
}

function addMoodHistory(payload){
    return { type: dataConstants.ADD_MOOD_HISTORY, payload };
};