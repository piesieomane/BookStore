const ADD_BOOK = 'booksholder/books/ADD_BOOK';
const REMOVE_BOOK = 'booksholder/books/REMOVE_BOOK';
const FETCH_BOOKS = 'booksholder/books/FETCH_BOOKS';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...state];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const fetchBOOK = () => ({
  type: FETCH_BOOKS,
});

export const addBOOK = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
