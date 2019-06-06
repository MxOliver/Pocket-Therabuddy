import { authHeader } from '../helpers/authHeader';

export const skillService = {
    getSkill,
    addSkill,
    editSkill,
    destroySkill,
    fetchAllSkills
}

async function addSkill(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ skill: params })
    }

    const response = await fetch(`/copingskills/add`, requestOptions);
    const res = handleResponse(response);
    return res;
}

async function getSkill(skillId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`/copingskills/${skillId}`, requestOptions);
    const res = handleResponse(response);
    localStorage.setItem('currentSkill', JSON.stringify(res));
    return res;
}

async function fetchAllSkills(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`/copingskills/${userId}/fetchAll`, requestOptions);
    const res = handleResponse(response);
    localStorage.setItem('skills', JSON.stringify(res));
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