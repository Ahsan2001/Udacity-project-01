import React, { useEffect, useState } from 'react';
import * as BooksAPI from './api/BooksAPI';
import WebRoutes from './routes';
import './App.css';

const BooksApp = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res)
    };
    getBooks()
  }, [])

  const handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setBooks(books.filter(b => b.id !== book.id).concat(book))
  }


  return <WebRoutes books={books} handleUpdateShelf={handleUpdateShelf} />
}

export default BooksApp


