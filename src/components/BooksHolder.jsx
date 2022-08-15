import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';

const BooksHolder = () => {
  const BOOKS = useSelector((state) => state.books);
  return (
    <div>
      {BOOKS.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BooksHolder;
