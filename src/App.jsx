import React, { useEffect, useState } from "react";
import "./App.scss";
import Grid from "./Component/Grid/Grid.jsx";
import { fetchBooks } from "./Utilities/fetchBooks.jsx";

function App() {
  const [inputValue, setInputValue] = useState(""); // Text typed in the input box
  const [searchTerm, setSearchTerm] = useState(""); // Actual value used for searching
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    setBooks([]);
    setError(null);
    if (!searchTerm.trim()) return;

    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerm}`;

      const data = await fetchBooks(url);
      setBooks(data.items || []);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
      setBooks([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchBooks();
    }
  }, [searchTerm]);

  return (
    <div>
      <h3>Search books</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a book title..."
      />
      <button onClick={() => setSearchTerm(inputValue)}>Search</button>

      {error ? <div>{error}</div> : null}

      <Grid id={books.id} books={books} />
    </div>
  );
}

export default App;
