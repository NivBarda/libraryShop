import React from "react";
import Book from "./Book";
const Books = ({ books, admin ,handleDelete }) => {
  return (
    <>
      {books.map((book) => (
        <Book book={book} admin={admin} key={book.id} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default Books;
