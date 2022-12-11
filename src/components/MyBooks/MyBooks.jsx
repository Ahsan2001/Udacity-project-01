import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import List from "../List";


const MyBooks = ({books, handleUpdateShelf}) => {

      const currentlyReading = books.filter(book => book.shelf && book.shelf === "currentlyReading");
      const wantToRead       = books.filter(book => book.shelf && book.shelf === "wantToRead");
      const read             = books.filter(book => book.shelf && book.shelf === "read");

      return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentlyReading.map((book) => currentlyReading && (
                     <li key={book.id}>
                     <List book={book} handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) => wantToRead && (
                     <li key={book.id}>
                     <List book={book} handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map((book) =>  read && (
                     <li key={book.id}>
                     <List book={book} handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
             <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
          
        </div>
      )
}

MyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired
};


export default MyBooks;