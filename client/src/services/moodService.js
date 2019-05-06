import { authHeader } from '../helpers/authHeader';

export const moodService = {
    add,
    getHistory,
    getDateRange,
    getNotes
}

async function add(mood) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: mood })
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/moodtracker/add`, requestOptions);
    const currentMood = await handleResponse(response);
    return currentMood;
}

async function getHistory(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/moodtracker/${user.id}/history`, requestOptions);
    const res = response.text();
    localStorage.setItem('moods', JSON.stringify(res));
    return res;
    
}

async function getNotes(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/moodtracker/${user.id}/notes`, requestOptions);
    const res = response.text();
    return res;
}

async function getDateRange(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/moodtracker/${user.id}/historyDate`, requestOptions);
    const res = response.text();
    localStorage.setItem('date', JSON.stringify(res));
    return res;
}

async function handleResponse(response) {
    const body = await response.text();
    if(!response.ok){
        const error = (body && body.message) || response.statusText;
        return Promise.reject(error);
    }

    return body;
}

