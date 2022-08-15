import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBOOK } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({ title: '', author: '' });

  const changeState = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formStates.title.trim() || !formStates.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: formStates.title,
      author: formStates.author,
    };
    dispatch(addBOOK(book));
    setFormStates({ title: '', author: '' });
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
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
