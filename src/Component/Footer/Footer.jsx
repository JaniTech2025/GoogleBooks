import React from 'react';
import styles from "./footer.module.scss";


function Footer({text}) {
  return (
    <footer><p className={styles.text}>{text}</p></footer>
  )
}

export default Footer;