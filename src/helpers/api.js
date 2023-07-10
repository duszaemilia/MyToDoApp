export async function getDataAPI(endpoint) {
    const response = await fetch (`http://localhost:3000/${endpoint}`);
    return response.json()
}

export async function sendDataAPI(data, endpoint) {
    const response = await fetch(
        `http://localhost:3000/${endpoint}`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }
    )
    return response.json()
}

export async function deleteTaskAPI(id) {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'})
    return response.json();
}