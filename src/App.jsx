import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Grid from "./component/Grid/Grid.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Header from "./component/Header/Header.jsx";
import { fetchBooks } from "./utilities/fetchBooks.js";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    setBooks([]);
    setError(null);

    // if (!searchTerm.trim()) {
    //   setError("Enter a title to search");
    //   return;
    // }

    // const result = await fetchBooks(searchTerm);
    try {
      const result = await fetchBooks(searchTerm);
      setBooks(result.data);
    } catch (err) {
       setError(`"${searchTerm} not available". Try another title?`);
       setBooks([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchBooks();
    }
  }, [searchTerm]);

  const passSearchTerm = (str) => {
    if (!str.trim()) {
      setError("Enter a title to search");
      setBooks([]);
      return;
    }
    setSearchTerm(str);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.navbartitle}>.BookNest.</h1>
      </nav>

      <Header error={error} onSearch={passSearchTerm} />

      <Grid books={books} />


      <Footer text={"Based on Google Books API. Created by Jani in 2025."} />
    </>
  );
}

export default App;
