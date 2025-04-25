import { useState } from "react";
import styles from "./Card.module.scss";
import {modifyDescription}  from "../../Utilities/modifyDescription";
// import LinesEllipsis from 'react-lines-ellipsis';


function Card({ id, title, authors, description, image }) {

    // const [showMore, setShowMore] = useState(false);
    const { previewDescription } = modifyDescription(description);
    // console.log(previewDescription);


    const toggleDescription = () => {
      setShowMore((prev) => !prev);
    };


    
    return (
        <article className={styles.Card}>
            {/* <div className={styles.imageCard}> */}
                <img 
                  src={image} 
                  alt={title} 
                  className={styles.image}
                />
            {/* </div> */}
            <div className={styles.Textcontent}>
            <h3>{title}</h3> 
            <p>{authors?.join(', ')}</p>
            <p>{previewDescription}</p>
          </div>

        </article>

    );

  }
  
  export default Card;