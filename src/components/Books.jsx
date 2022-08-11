import React from 'react';
import styles from './Books.module.css';

const Books = (prop) => {
  const { title, author } = prop;
  return (
    <div>
      <div className={styles.book}>
        <div className={styles.about_book}>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
};
export default Books;
