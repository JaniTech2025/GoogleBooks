import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modaloverlay} onClick={onClose}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closebutton} onClick={onClose}><FontAwesomeIcon icon={faTimes} size="sm"/></button>
      </div>
    </div>
  );
}

export default Modal;
