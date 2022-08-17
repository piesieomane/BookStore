import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Books from './Books';
import AddBook from './AddBook';
import { fetchBOOK } from '../redux/books/books';
import API from './api';

const BooksHolder = () => {
  const BOOKS = useSelector((state) => state.books);
  const dispatch = useDispatch();
  console.log('BOOKS', BOOKS);

  useEffect(
    () => async () => {
      const bookShelf = await axios.get(`${API}/books`);
      if (bookShelf.data) {
        Object.keys(bookShelf.data).forEach((itemId) => {
          const data = bookShelf.data[itemId];
          const book = Object.assign({}, { item_id: itemId }, ...data);
          BOOKS.push(book);
        });
        return dispatch(fetchBOOK());
      }
      return console.log('no books');
    },
    [],
  );

  return (
    <div>
      {BOOKS.map((book) => (
        <Books
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BooksHolder;
