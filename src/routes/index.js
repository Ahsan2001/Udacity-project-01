import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { BookSearch, MyBooks, NotFound } from '../components';


const WebRoutes = ({ books, handleUpdateShelf }) => {
  return (
      <Routes>
          <Route index                element={<MyBooks     books={books}  handleUpdateShelf={handleUpdateShelf} />} />
          <Route exact path='/search' element={<BookSearch  books={books}  handleUpdateShelf={handleUpdateShelf} />} />
          <Route path='*'             element={<NotFound />} />
      </Routes>
  )
}


WebRoutes.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired
};


export default WebRoutes