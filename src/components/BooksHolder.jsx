import { useSelector } from 'react-redux';

import Books from './Books';
import AddBook from './AddBook';
import style from './BooksHolder.module.css';

const BooksHolder = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className={style.bookHolder}>
      {books.map((book) => (
        <Books
          key={book[0]}
          id={book[0]}
          title={book[1][0].title}
          author={book[1][0].author}
          category={book[1][0].category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BooksHolder;
