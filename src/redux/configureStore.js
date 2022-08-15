import { configureStore } from '@reduxjs/toolkit';
import booksRuducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksRuducer,
  },
});

export default store;
