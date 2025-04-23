import { useState } from "react";
import {styles} from "./Card.module.scss";

function Card({ id, title, authors, description, image }) {

    const [showMore, setShowMore] = useState(false);

    const toggleDescription = () => {
      setShowMore((prev) => !prev);
    };

    
    return (
      <div className={styles.Card} id={id}>
        {image && <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />}
        <h3>{title}</h3>
        <p>{authors?.join(', ')}</p>
        {description && (
        <div className="description">
          <p>
            {showMore ? description : `${description.slice(0, 100)}...`}
          </p>
          <button className="see-more-btn" onClick={toggleDescription}>
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      )}
      </div>
    );
  }
  
  export default Card;