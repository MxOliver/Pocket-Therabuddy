import { authHeader } from '../helpers/authHeader';

export const habitService = {
    addHabit,
    getHistory,
    getNotes
}

async function addHabit(habit) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({habit: habit})
    }

    const response = await fetch(`/api/habittracker/add_habit`, requestOptions);
    localStorage.setItem('habits', JSON.stringify(response));
    const res = handleResponse(response);
    return res;
}

async function getNotes(user){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`/api/habittracker/${user.id}/notes`, requestOptions);
    const res = handleResponse(response);
    return res;
}

async function getHistory(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`/api/habittracker/${user.id}/history`, requestOptions);
    const res = handleResponse(response);
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