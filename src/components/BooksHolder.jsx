import React from 'react';
import Books from './Books';

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
    </div>
  );
};

export default BooksHolder;
