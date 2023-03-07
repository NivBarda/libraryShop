import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import Books from "../components/Books";
import { useDispatch } from "react-redux";
import { adminActions } from "../Store/adminReducer";

const BooksPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(adminActions.adminHandler());
  };
  const admin = useSelector((state) => state.admin.isAdmin);

  const books = useFetch("http://localhost:8800/books");
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{admin ? "admin log out" : "admin log in"}</button>
      <h1>My Book Shop</h1>
      <div className="books">
        <Books books={books} handleDelete={handleDelete} />
      </div>
      {admin && (
        <button>
          <Link to="/add"> Add new book</Link>
        </button>
      )}
    </div>
  );
};

export default BooksPage;
