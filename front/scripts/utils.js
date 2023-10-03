export async function fetchJSON(path) {
    const response = await fetch(path)

    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`
        throw new Error(message)
    }

    return response.json()
}