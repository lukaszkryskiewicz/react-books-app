import { useSelector, useDispatch } from 'react-redux';
import { removeBookRequest } from '../../redux/booksRedux';
import { getAllBooks } from '../../redux/booksRedux';

const BooksList = () => { //zamiast props i potrem props.books.map mona zrobić tak jak tutaj
  const books = useSelector(getAllBooks)
  const dispatch = useDispatch();

  const handleClick = bookId => {
    dispatch(removeBookRequest(bookId));
  }

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => handleClick(book.id)}>Remove</button></li>)}
    </ul>
  );
};

export default BooksList;