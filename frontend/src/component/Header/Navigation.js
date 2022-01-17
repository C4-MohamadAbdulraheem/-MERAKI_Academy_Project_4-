import { Link, linkes } from "react-router-dom";
import decode from "jwt-decode";
import { useState } from "react";
import Category from "../Category/Category";
import "./Header.css";
const Navigation = () => {
  const localToken = localStorage.getItem("token");
  const role = localToken && decode(localToken).role.role;
  console.log(role);
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="nav">
      <Link to="/register" className="link">
        Register
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/products" className="link">
        Products
      </Link>
      <Link to="/cart" className="link">
        cart
      </Link>
      {role === "ADMIN" ? (
        <Link to="/create" className="link">
          Create Product
        </Link>
      ) : null}
      <Link
        to="#"
        className="link"
        onClick={() => {
          setIsopen(!isopen);
        }}
      >
        Category
      </Link>

      {isopen ? <Category /> : null}
      {role ? (
        <Link
          className="link"
          to="/login"
          onClick={() => {
            localStorage.clear();
            role = null;
          }}
        >
          Log out
        </Link>
      ) : null}
    </div>
  );
};

export default Navigation;
