import React from "react";
import PropTypes from 'prop-types';

const List = ({ book, handleUpdateShelf }) => {
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 130, height: 200}} >
                        <img src={book.imageLinks ? book.imageLinks.smallThumbnail : undefined} alt={book.title} />
                    </div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf || 'none'}   onChange={handleUpdateShelf}>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors} </div>
            </div>                 
        )   
}
List.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired
};


export default List;
