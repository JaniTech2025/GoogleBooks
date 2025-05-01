export async function fetchBooks(SearchTerm) {
    const authKey = import.meta.env.VITE_API_KEY;
    const maxResults = 9; 
    const encodedSearchTerm = encodeURIComponent(SearchTerm);
    // console.log(SearchTerm);
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchTerm}&key=${authKey}&maxResults=${maxResults}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {

            return { loading: false, data: []}; 
        }
        const data = await response.json();
        return { loading: true, data: data.items}; 
    } catch (error) {
        return { loading: false, data: []}; 
    }
}