// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';
import Books from './Books';
import AddBook from './AddBook';
// import { fetchBOOK } from '../redux/books/books';
// import API from './api';

const BooksHolder = () => {
  const books = useSelector((state) => state.books);
  // const dispatch = useDispatch();
  console.log('BOOKS6', books);

  // useEffect(
  //   () => async () => {
  //     const bookShelf = await axios.get(`${API}/books`);
  //     if (bookShelf.data) {
  //       Object.keys(bookShelf.data).forEach((itemId) => {
  //         const data = bookShelf.data[itemId];
  //         const book = Object.assign({}, { item_id: itemId }, ...data);
  //         BOOKS.push(book);
  //       });
  //       return dispatch(fetchBOOK());
  //     }
  //     return console.log('no books');
  //   },
  //   [],
  // );

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
