import { useSelector, useDispatch } from 'react-redux';

const BooksList = () => { //zamiast props i potrem props.books.map mona zrobić tak jak tutaj
  const books = useSelector(state => state.books)
  const dispatch = useDispatch();

  const handleClick = bookId => {
    dispatch({ type: 'REMOVE_BOOK', payload: bookId });
  }

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => handleClick(book.id)}>Remove</button></li>)}
    </ul>
  );
};

export default BooksList;