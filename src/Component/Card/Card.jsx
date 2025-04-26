import { useState } from "react";
import styles from "./Card.module.scss";
import {modifyDescription}  from "../../Utilities/modifyDescription";
import Modal from "../Modal/Modal";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import {defaultImage} from "../../assets/imagedefault.jpg";
//src\Component\Card\Card.jsx
//src\Component\Modal\Modal.jsx

function Card({ title, authors, description, image, publisher, publisheddate, infoLink}) {


    // const [showMore, setShowMore] = useState(false);
    const { previewDescription } = modifyDescription(description);
    // console.log(previewDescription);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const toggleDescription = () => {
      setShowMore((prev) => !prev);
    };

    const  handleClick = (url) => {     
        if(url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    // console.log({infoLink});
  


    
    return (
        <article className={styles.Card}>
                <img 
                  src={image} 
                  className={styles.image}
                  onClick={openModal}
                  onError={(e) => {
                    e.target.onerror = null; 
                  }}
                />

            <div className={styles.Textcontent}>
            <h3>{title}</h3> 
            <p>{authors?.join(', ')}</p>
            <p>{previewDescription}</p>
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={styles.Container}>
               <img src={image} 
               className={styles.modalImage} 
               onError={(e) => {
                e.target.onerror = null; 
                e.target.src = defaultImage; 
              }}
               />
               <div className={styles.divider}></div>
               <div className={styles.modalText}>
               <h4>{title}</h4> 
               <p>{publisher}</p>
               <p>{publisheddate}</p>
               <p><button onClick={() => handleClick(infoLink)}>More info
               </button></p>
               </div>
            </div>
         </Modal>

        </article>

    );

  }
  
  export default Card;