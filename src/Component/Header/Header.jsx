import React, { useRef } from "react";
import styles from "./Header.module.scss";

function Header({ error, onSearch }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <header className={styles.container}>
      <div className={styles.searchbar}>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (error) onSearch("");
            if (e.key === "Enter") {
              onSearch(e.target.value);
            }
          }}
          placeholder="Type a book title and press Enter..."
        />
        <button onClick={handleClick}>
          <i className="fa fa-search fa-2x"></i>
        </button>
        {error && <div className={styles.errormessage}>{error}</div>}
      </div>
    </header>
  );
}

export default Header;
