import React, { useEffect, useState } from 'react';
import "./Grid.module.scss";

function Grid({id, books}) {

  console.log("Received", {books});


  return (
    <article>
        <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
  </article>
  )
}

export default Grid;
