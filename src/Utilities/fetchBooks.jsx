export async function fetchBooks(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return (data.items); 
    } catch (error) {
        console.error("Error in fetchBooks:", error);
        throw error;
    }
}