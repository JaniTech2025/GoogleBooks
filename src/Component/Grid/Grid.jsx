import React, { useEffect, useState } from 'react';
import styles from "./Grid.module.scss";
import Card from "../Card/Card";

function Grid({id, books}) {

  console.log("Received", {books});


  return (
<article className={styles}>
    {books.map((book) => (
    <Card
      key={book.id}
      id={book.id}
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
      description={book.volumeInfo.description}
      image={book.volumeInfo.imageLinks?.thumbnail}
    />
  ))}
</article>
  )
}

export default Grid;
