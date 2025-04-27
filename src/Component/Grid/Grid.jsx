// import React, { useEffect, useState } from 'react';
import styles from "./Grid.module.scss";
import Card from "../Card/Card";

function Grid({books}) {

  // console.log("Received", {books});


  return (
    <main className={styles.Container}>
        {books.map((book) => (
        <Card
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks?.thumbnail}
          publisher={book.volumeInfo.publisher}
          // publisheddate={book.volumeInfo.publisheddate}
          language={book.volumeInfo.language}
          totalpages={book.volumeInfo.totalpages}
          const infoLink={book.volumeInfo.infoLink}
        />
      ))}
    </main>
  )
}

export default Grid;