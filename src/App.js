import BooksList from './components/BooksList/BooksList'
import BookForm from './components/BookForm/BookForm'
import { fetchBooks } from './redux/booksRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBooks()), [dispatch]);


  return (
    <div>
      <h1> Book App </h1>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
