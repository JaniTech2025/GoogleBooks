export async function fetchBooks(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.error("Error in fetchBooks:", error);
        throw error;
    }
}