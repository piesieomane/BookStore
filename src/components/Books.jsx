import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Books.module.css';
import { removeBook } from '../redux/books/books';

const Books = (prop) => {
  const dispatch = useDispatch();
  const { id, title, author } = prop;

  const removeBookFromList = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={styles.book}>
        <div className={styles.about_book}>
          <p>{title}</p>
          <strong>BY</strong>
          <p>{author}</p>
          <button type="button" onClick={removeBookFromList}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default Books;
