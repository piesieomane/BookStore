import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './Books.module.css';
import { removeBook } from '../redux/books/books';
import API from './api';

const Books = (prop) => {
  const dispatch = useDispatch();
  const { id, title, author } = prop;

  const removeBookFromList = async () => {
    await axios.delete(`${API}/books/${id}`);
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={styles.book}>
        <div className={styles.about_book}>
          <p>{title}</p>
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
