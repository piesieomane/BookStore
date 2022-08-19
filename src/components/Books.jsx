import React from 'react';
import { useDispatch } from 'react-redux';
import './Books.css';
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
    <div className="book_container d-flex">
      <div className="book d-flex">
        <div className="about_book d-flex">
          <h3 className="title1 font-mont">{category}</h3>
          <h2 className="title2 font-Roboto">{title}</h2>
          <p className="title1 font-mont color-blue">{author}</p>
        </div>
        <div className="btn_control">
          <button className="btn_cl font-Roboto" type="button">
            Comments
          </button>
          <button type="button" className="btn_cl font-Roboto" onClick={removeBookFromList}>
            Remove
          </button>
          <button className="btn_cl font-Roboto" type="button">
            Edits
          </button>
        </div>
      </div>
      <div className="book_status d-flex">
        <StatusBook />
        <CurrentChapter />
      </div>
    </div>
  );
};
export default Books;
