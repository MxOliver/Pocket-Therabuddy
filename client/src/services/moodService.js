import { authHeader } from '../helpers/authHeader';

export const moodService = {
    add,
    getHistory,
    getDateRange,
    getNotes,
    removeNote
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

async function removeNote(mood){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moodId: mood })
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/${mood}/remove_moodnote`, requestOptions);
    const res = handleResponse(response);
    return res;
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
    const res = handleResponse(response);
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


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}