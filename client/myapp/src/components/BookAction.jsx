import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookAction = ({ id, handleDelete }) => {
  const admin = useSelector((state) => state.admin.isAdmin);
  return (
    <>
      {admin && (
        <>
          <button
            className="delete"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>

          <button className="update">
            <Link to={`/update/${id}`}>Update</Link>
          </button>
        </>
      )}
    </>
  );
};

export default BookAction;
