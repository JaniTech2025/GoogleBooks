import { useState } from 'react';
import styles from "./Grid.module.scss";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Defaultimg from '../../assets/Defaultimg.png';

function Grid({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  const handleClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className={styles.container}>
      {books.map((book) => (
        <Card
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks?.thumbnail}
          onClick={() => openModal(book)}
        />
      ))}

      {selectedBook && (
        <Modal isOpen={!!selectedBook} onClose={closeModal}>
          <div className={styles.modalcontainer}>
            <img
              src={selectedBook.volumeInfo.imageLinks?.thumbnail || Defaultimg}
              className={styles.modalimage}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
            <div className={styles.divider}></div>
            <div className={styles.modaltext}>
              <h4>{selectedBook.volumeInfo.title}</h4>
              <p>{selectedBook.volumeInfo.publisher}</p>
              <p>
                <a
                  className={styles.modalbutton}
                  onClick={() => handleClick(selectedBook.volumeInfo.infoLink)}
                >
                  More info
                </a>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}

export default Grid;
