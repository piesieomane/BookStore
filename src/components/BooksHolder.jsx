import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BooksHolder = () => {
  const BOOKS = [
    { title: 'Piesie', author: 'Wise', id: 1 },
    { title: 'Bankudade', author: 'Omane', id: 2 },
  ];
  return (
    <div>
      {BOOKS.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BooksHolder;
