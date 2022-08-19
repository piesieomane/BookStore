import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBOOK } from '../redux/books/books';
import style from './AddBook.module.css';

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
    <div className={style.add_book}>
      <h3 className={style.add_book_title}>ADD NEW BOOK</h3>
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
        <label htmlFor="category-select">
          <select
            type="text"
            value={formStates.category}
            onChange={changeState}
            placeholder="Category"
            name="category"
          >
            <option value="Slice Of Life">Slice Of Life</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Animation">Animation</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Documentary">Documentary</option>
          </select>
        </label>
        <button type="submit" className={style.add_book_btn}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
