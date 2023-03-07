import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(url);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return books;
};

export default useFetch;
