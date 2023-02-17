import BooksList from './components/BooksList/BooksList_class'
import BookForm from './components/BookForm/BookForm_class'
import React, { useState } from 'react';
import shortid from 'shortid';

class App extends React.Component {




  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId) })
  }

  addBook = newBook => {
    this.setState({ books: [...this.state.books, { id: shortid(), title: newBook.title, author: newBook.author }] });
  }

  render() {
    const { books } = this.state;
    const { addBook, removeBook } = this;

    return (
      <div>
        <h1> Book App </h1>
        <BooksList books={books} removeBook={removeBook} />
        <BookForm addBook={addBook} />
      </div>
    );
  }
}

export default App;
