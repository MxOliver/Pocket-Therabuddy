import { authHeader } from '../helpers/authHeader';

export const moodService = {
    add,
    getHistory
}

async function add(mood) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: mood })
    };

    const response = await fetch(`/api/moodtracker/add`, requestOptions);
    return handleResponse(response);
}

async function getHistory(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`/api/moodtracker/${user.id}/history`, requestOptions);
    const res = response.text();
    console.log(res);
}

async function handleResponse(response) {
    const body = await response.text();
    if(!response.ok){
        const error = (body && body.message) || response.statusText;
        return Promise.reject(error);
    }

    return body;
}

