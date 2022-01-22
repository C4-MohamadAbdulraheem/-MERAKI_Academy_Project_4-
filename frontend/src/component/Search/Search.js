import "./Search.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";

import { useNavigate,useParams ,Link} from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Search = ({ setProductDetailes ,setCart,
  cart,
  totalProducts,
  setProductId, }) => {
  const [productSearch, setProductSearch] = useState([]);
//create pagination use states
const [currentPage, setCurrentPage] = useState(1);
//
const [productsPerPage, setProductsPerPage] = useState(5);
//logic for pagination

const indexOfLastProduct = currentPage * productsPerPage;
////////////
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//////////////////////////
const currentProducts = productSearch.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

const paginate = (pageNumber) => setCurrentPage(pageNumber);



  
  const [counter, setCounter] = useState(0);
  const Navigate = useNavigate();
const {title} =useParams()
  const search = (title) => {
    axios
      .get(`http://localhost:5000/product/search/${title}`)
      .then((result) => {
        setProductSearch(result.data.products);
      })
      .then((err) => {});
  };
  useEffect(()=>{
    search(title)
  },[])

  const products =
  currentProducts.length &&
  currentProducts.map((product) => {
      return (
        <>
        <div
          className="productes"
          key={product._id}
          onClick={() => {
            setProductId(product._id);
          }}
        >
          <div>
            <Link to={`/productdetailes/${product._id}`}>
              <img
                src={product.image}
                style={{ height: "340.98px", width: "362.14" }}
              />
            </Link>
          </div>
          <div className="productes-description">
            <span className="title">
              {product.title.substring(-1, 30) + "..."}
            </span>
            <p>{product.description.substring(-1, 70) + "..."}</p>
            <span className="price">Price : {product.price} J.D</span>
            <div className="productes-btn">
              <Link
                to={`/productdetailes/${product._id}`}
                style={{
                  borderRight: "1px solid rgb(211, 206, 206)",
                  paddingLeft: "10%",
                }}
              >
                <BiShowAlt /> Show Product
              </Link>
              <Link
                to="#"
                onClick={(e) => {
                  setCart([...cart, { ...product, number: "1" }]);
                  console.log(cart);
                  if (localStorage.getItem("productCart") == null) {
                    localStorage.setItem("productCart", []);
                  }

                  localStorage.setItem(
                    "productCart",
                    JSON.stringify([...cart, { ...product, number: "1" }])
                  );
                }}
              >
                {" "}
                <AiOutlineShoppingCart /> Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
      );
    });

  return (
    <>
    <div className="products">
      {products ? products : <p>There is no products</p>}
    </div>
     <Pagination productsPerPage={productsPerPage}
     totalProducts={productSearch.length}
     paginate={paginate}></Pagination>
     </>
  );
};

export default Search;
