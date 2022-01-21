import axios from "axios";
import "./Category.css";
import { useNavigate,Link } from "react-router-dom";
const Category = ({ setProductCategory }) => {
  
 const navigate = useNavigate()
  return (
    <div className="Category">
      <Link
      to={`/category/mobiles`}
        // onClick={() => {
        //   // getProductByCategory(`mobiles`);
        //   navigate("/category")
        // }}
        // className="Categorylist"
      >
        | Mobiles |
      </Link>
      <Link
      to={`/category/mobiles`}
        // onClick={() => {
        //   // getProductByCategory(`mobiles`);
        //   navigate("/category")
        // }}
        // className="Categorylist"
      >
        | TVs |
      </Link>
      <Link
      to={`/category/mobiles`}
        // onClick={() => {
        //   // getProductByCategory(`mobiles`);
        //   navigate("/category")
        // }}
        // className="Categorylist"
      >
        | Laptops |
      </Link>
      <Link
      to={`/category/mobiles`}
        // onClick={() => {
        //   // getProductByCategory(`mobiles`);
        //   navigate("/category")
        // }}
        // className="Categorylist"
      >
        | Mobiles |
      </Link>



      <p className="Categorylist">| TVs |</p>
      <p className="Categorylist">| Laptops |</p>
      <p className="Categorylist">| Ipads |</p>
      <p className="Categorylist">| Accessories |</p>
    </div>
  );
};

export default Category;
