import axios from "axios";
import "./Category.css";
import { useNavigate, Link } from "react-router-dom";
const Category = ({ setProductCategory }) => {
  const navigate = useNavigate();
  return (
    <div className="Category">
      <Link to={`/category/Laptops`} className="categ-link">
        | Laptops |
      </Link>
      <Link to={`/category/PC`} className="categ-link">
        | PC |
      </Link>
      <Link to={`/category/Mobiles`} className="categ-link">
        | Mobiles |
      </Link>
      <Link to={`/category/Tablets`} className="categ-link">
        | Tablets |
      </Link>
      <Link to={`/category/Accessories`} className="categ-link">
        | Accessories |
      </Link>
    </div>
  );
};

export default Category;
