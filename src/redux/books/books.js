import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'booksholder/books/ADD_BOOK';
const REMOVE_BOOK = 'booksholder/books/REMOVE_BOOK';
const FETCH_BOOKS = 'booksholder/books/FETCH_BOOKS';

export default (state = [], action) => {
  switch (action.type) {
    case 'booksholder/books/FETCH_BOOKS/fulfilled':
      return action.payload.books;
    case 'booksholder/books/ADD_BOOK/fulfilled':
      return [...state, action.payload.books];
    case 'booksholder/books/REMOVE_BOOK/fulfilled':
      return [...state.filter((book) => book[0] !== action.payload.id)];
    default:
      return state;
  }
};

export const fetchBOOK = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PX6aInUB6II3Dr3TyuaU/books/',
  );

  return { books: Object.entries(res.data) };
});

export const addBOOK = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PX6aInUB6II3Dr3TyuaU/books/',
    {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    },
  );
  return {
    books: [
      book.item_id,
      [
        {
          author: book.author,
          title: book.title,
          category: book.category,
        },
      ],
    ],
  };
});
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PX6aInUB6II3Dr3TyuaU/books/${id}`,
  );
  return { id };
});
