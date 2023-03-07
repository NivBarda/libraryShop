import React from "react";
import BookAction from "./BookAction";

const Book = ({ book ,handleDelete }) => {
  return (
    <div className="book">
      {book.cover && <img src={book.cover} alt={book.title} />}
      <h2>{book.title}</h2>
      <p>{book.desc}</p>
      <span>{book.price}</span>
      <BookAction id={book.id} handleDelete={handleDelete} />
    </div>
  );
};

export default Book;
