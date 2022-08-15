import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input type="text" placeholder="title" />
        <input type="search" placeholder="author" />
        <button type="submit" onClick={() => dispatch(addBook())}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
