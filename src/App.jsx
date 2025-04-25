import React, { useEffect, useState, useRef } from "react";
import  "./App.scss";
import Grid from "./Component/Grid/Grid.jsx";
import { fetchBooks } from "./Utilities/fetchBooks.jsx";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const inputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState(""); // Actual value used for searching
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    setBooks([]);
    setError(null);
    if (!searchTerm.trim()) return;

    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const authKey = "AIzaSyDKRzckLSXxY0QZ6zAWpClcuztBBiLqx-k";
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchTerm}&key=${authKey}`;
      //https://www.googleapis.com/books/v1/volumes?q=intitle

      const booksData = await fetchBooks(url);
      console.log("Result", booksData);
      booksData === undefined
      ? (setBooks([]),
         setError(`Your search for ${encodedSearchTerm} did not match any title. Try a different title`))
      : (setBooks(booksData), setError(null));
    } catch (err) {
      setError("Unable to fetch books. Try again.");
      setBooks([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchBooks();
    }
  }, [searchTerm]);



  const handleClick = () => {
    const value = inputRef.current.value;
    setSearchTerm(value);
  };

  return (
    <>
    <nav className="navbar">
      <h1 className="navbar-title">.BookNest.</h1>
    </nav>
    <header className="Container">
    <div className="search-bar">
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(e.target.value);
            }
          }}
          placeholder="Type a book title and press Enter..."
        />
        <button onClick={handleClick}><i className="fa fa-search fa-2x"></i></button>


      {error ? <div className="error-message">{error}</div> : null}
      </div>
    </header>

    <main>
         <Grid books={books}/>
    </main>
    </>

  );
}

export default App;