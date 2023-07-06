export async function getAllTasks() {
    const response = await fetch ('http://localhost:3000/tasks');
    return response.json()
}