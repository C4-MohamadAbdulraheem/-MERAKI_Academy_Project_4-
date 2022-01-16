import { Link, linkes } from "react-router-dom";
import { useState } from "react";
import Category from "../Category/Category"
import "./Header.css";
const Navigation = () => {
const [isopen, setIsopen] = useState(false)
  return (
    <div className="nav">
      <Link to="/register" className="link">Register</Link>
      <Link to="/login" className="link">Login</Link>
      <Link to="/products" className="link">Products</Link>
      <Link to="/cart" className="link">cart</Link>
      <Link to="#" className="link" onClick={()=>{
        setIsopen(!isopen);
      }}>Category</Link>
      {/* {isopen ?<Category/>:null} */}

    </div>
  );
};

export default Navigation;
