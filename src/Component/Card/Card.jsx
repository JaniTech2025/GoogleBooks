import { useState } from "react";
import styles from "./Card.module.scss";
import {modifyDescription}  from "../../utilities/modifyDescription.js";
import Modal from "../Modal/Modal";
import Defaultimg from '../../assets/Defaultimg.png';


function Card({ title, authors, description, image, publisher, infoLink}) {


    const [imageError, setImageError] = useState(false);    
    const { previewDescription } = modifyDescription(description);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const toggleDescription = () => {
      setShowMore((prev) => !prev);
    };

    const  handleClick = (url) => {     
        if(url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    
    return (
        <article className={styles.card}>
                <img 
                  src={image || Defaultimg} 
                  className={styles.image}
                  onClick={openModal}
                  onError={(e) => {
                    e.target.onerror = null; 
                  }}
                />

            <div className={styles.textcontent}>
            <h3>{title}</h3> 
            <p>{authors?.join(', ')}</p>
            <p>{previewDescription}</p>
          </div>

          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={styles.container}>
               <img src={image || Defaultimg} 
               className={styles.modalimage} 
               onError={(e) => {
                e.target.onerror = null; 
              }}
               />
               <div className={styles.divider}></div>
               <div className={styles.modaltext}>
               <h4>{title}</h4> 
               <p>{publisher}</p>
               <p><button className={styles.modalbutton} onClick={() => handleClick(infoLink)}>More info
               </button></p>
               </div>
            </div>
         </Modal>}

        </article>

    );

  }
  
  export default Card;