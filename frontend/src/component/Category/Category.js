import axios from "axios";
import "./Category.css";
import { useNavigate } from "react-router-dom";
const Category = ({ setProductCategory }) => {
  const getProductByCategory = (category) => {
    axios
      .get(`http://localhost:5000/product/get/${category}`)
      .then((result) => {
        setProductCategory(result.data.products);
        console.log(result);
      });
  };
 const navigate = useNavigate()
  return (
    <div className="Category">
      <p
        onClick={() => {
          getProductByCategory(`mobiles`);
          navigate("/category")
        }}
        className="Categorylist"
      >
        | TVs |
      </p>
      <p className="Categorylist">| Mobiles |</p>
      <p className="Categorylist">| Laptops |</p>
      <p className="Categorylist">| Ipads |</p>
      <p className="Categorylist">| Accessories |</p>
    </div>
  );
};

export default Category;
