import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBOOK } from '../redux/books/books';
// import API from './api';

const AddBook = () => {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeState = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formStates.title.trim() || !formStates.author.trim()) return;
    const bookFetched = {
      item_id: uuidv4(),
      title: formStates.title,
      author: formStates.author,
      category: formStates.category,
    };
    dispatch(addBOOK(bookFetched));
    setFormStates({ title: '', author: '', category: '' });
  };
  return (
    <div>
      <form onSubmit={bookState}>
        <input
          type="text"
          onChange={changeState}
          value={formStates.title}
          placeholder="title"
          name="title"
        />
        <input
          type="search"
          onChange={changeState}
          value={formStates.author}
          placeholder="author"
          name="author"
        />
        <input
          type="category"
          onChange={changeState}
          value={formStates.category}
          placeholder="category"
          name="category"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
