import { Link, linkes } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navigation;
