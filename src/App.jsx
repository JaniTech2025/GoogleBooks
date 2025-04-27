import React, { useEffect, useState, useRef } from "react";
import styles from "./App.module.scss";
import Grid from "./Component/Grid/Grid.jsx";
import { fetchBooks } from "./Utilities/fetchBooks.jsx";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./Component/Footer/Footer.jsx";

function App() {
  const inputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState(""); // Actual value used for searching
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const authKey = import.meta.env.VITE_API_KEY;


  const searchBooks = async () => {
    setBooks([]);
    setError(null);
    if (!searchTerm.trim()) return;

    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      // const authKey = "AIzaSyDKRzckLSXxY0QZ6zAWpClcuztBBiLqx-k";
      // const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchTerm}&key=${authKey}`;
      const maxResults = 9; 
       const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchTerm}&key=${authKey}&maxResults=${maxResults}`;
      //https://www.googleapis.com/books/v1/volumes?q=intitle

      const booksData = await fetchBooks(url);
      console.log("Result", booksData);
      booksData === undefined
      ? (setBooks([]),
         setError(`Your search for ${encodedSearchTerm} did not match any title. Try a different title?`))
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
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>.BookNest.</h1>
    </nav>
    <header className={styles.Container}>
    <div className={styles.searchBar}>
        <input
          type={styles.text}
          ref={inputRef}
          onKeyDown={(e) => {
            if(error) setError("");
            if (e.key === "Enter") {
              setSearchTerm(e.target.value);
            }
          }}
          placeholder="Type a book title and press Enter..."
        />
        <button onClick={handleClick}><i className="fa fa-search fa-2x"></i></button>


      {error ? <div className={styles.errorMessage}>{error}</div> : null}
      </div>
    </header>

    <main>
         <Grid books={books}/>
    </main>
    <Footer text={"Based on Google Books api. Created by Jani in 2025."}/>
    </>

  );
}

export default App;