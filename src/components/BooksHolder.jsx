import { useSelector } from 'react-redux';

import Books from './Books';
import AddBook from './AddBook';

const BooksHolder = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Books
          key={book[0]}
          id={book[0]}
          title={book[1][0].title}
          author={book[1][0].author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BooksHolder;
