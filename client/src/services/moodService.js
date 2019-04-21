
export const moodService = {
    add
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

async function handleResponse(response) {
    const body = await response.text();
    if(!response.ok){
        const error = (body && body.message) || response.statusText;
        return Promise.reject(error);
    }

    return body;
}

