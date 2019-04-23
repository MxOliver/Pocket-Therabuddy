import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
    register,
    getById,
    update,
    getCurrent,
    delete: _delete
};

async function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user })
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sign_in`, requestOptions);
    const currentUser = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(currentUser));
    return currentUser;
}

function logout() {
    localStorage.removeItem('user');
}

async function getCurrent() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, requestOptions);
    const res = response.text();
    return res;
}

async function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/${id}`, requestOptions);
    return handleResponse(response);
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user })
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sign_up`, requestOptions);
    const res = response.text();
    console.log(res);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${process.env.REACT_APP_API_URL}/api/users/${user.id}`, requestOptions).then(handleResponse);;
}

async function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/${id}`, requestOptions);
    return handleResponse(response);
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