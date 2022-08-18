import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Books.module.css';
import { removeBook } from '../redux/books/books';
import StatusBook from './StatusBook';
import CurrentChapter from './CurrentChapter';

const Books = (prop) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = prop;

  const removeBookFromList = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.about_book}>
          <h3>{category}</h3>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className={styles.btn_control}>
          <button className={styles.btn_cl} type="button">
            Comments
          </button>
          <button type="button" className={styles.btn_cl} onClick={removeBookFromList}>
            Remove
          </button>
          <button className={styles.btn_cl} type="button">
            Edits
          </button>
        </div>
      </div>
      <div className={styles.book_status}>
        <StatusBook />
        <CurrentChapter />
      </div>
    </div>
  );
};
export default Books;
