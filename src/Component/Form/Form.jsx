import React, { useEffect, useState } from 'react';
import "./Form.module.scss";
import { fetchBooks } from '../../Utilities/fetchBooks.jsx';




function Form() {


  const[fetchedData, setData] = useState([]);

  useEffect(() =>{
      console.log("calling fetch");
      fetchBooks().then(fetchedData => setData(fetchedData));
      console.log("after fetch");
  }, []);

  // title: item.volumeInfo.title,
  // authors: item.volumeInfo.authors,
  // description: item.volumeInfo.description,
  // image: item.volumeInfo.imageLinks?.thumbnail


  return (
       <div>

        <div>
          
        </div>
        <div>
        <h3>{fetchedData[0].title}</h3>
        <p>{fetchedData[0].authors}</p>
        <p>{fetchedData[0].description}</p>
        {/* {fetchedData[0].imageLinks.thumbnail && <img src={fetchedData[0].imageLinks.thumbnail} alt={fetchedData[0].title} />} */}
        </div>
        </div>
       //Search based on book name, author, then pass handler to submit
       //Figure out how to extract data here - Refer albm and other previous react projects
  )
}

export default Form;
