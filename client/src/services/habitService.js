import { authHeader } from '../helpers/authHeader';

export const habitService = {
    addHabit,
    getHistory,
    getNotes,
    removeNote
}

async function addHabit(habit) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({habit: habit})
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/habittracker/add_habit`, requestOptions);
    localStorage.setItem('habits', JSON.stringify(response));
    const res = handleResponse(response);
    return res;
}

async function removeNote(id){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ habitId: id })
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/habittracker/${id}/remove_note`, requestOptions);
    const res = handleResponse(response);
    return res;
}

async function getNotes(user){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/habittracker/${user.id}/notes`, requestOptions);
    const res = handleResponse(response);
    return res;
}

async function getHistory(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/habittracker/${user.id}/history`, requestOptions);
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