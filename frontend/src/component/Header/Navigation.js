import { Link, linkes } from "react-router-dom";
import "./Header.css";
const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/register" className="link">Register</Link>
      <Link to="/login" className="link">Login</Link>
      <Link to="/products" className="link">Products</Link>
      <Link to="/cart" className="link">cart</Link>
    </div>
  );
};

export default Navigation;
