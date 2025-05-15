export async function fetchBooks(SearchTerm) {
  const authKey = import.meta.env.VITE_API_KEY;
  const maxResults = 9;
  const encodedSearchTerm = encodeURIComponent(SearchTerm);
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchTerm}&key=${authKey}&maxResults=${maxResults}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status}: ${response.statusText}`
      );
    }
    const data = await response.json();

    if (!data.items) {
      throw new Error("No books found for the search term.");
    }

    return { loading: false, data: data.items };
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}
