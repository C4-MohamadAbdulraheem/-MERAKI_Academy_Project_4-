import "./Search.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";

import { useNavigate,useParams ,Link} from "react-router-dom";

const Search = ({ setProductDetailes }) => {
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
        <div
          className="product"
          key={product._id}
          // onClick={() => {
          //   setProductDetailes([product]);
          //   localStorage.setItem("product", JSON.stringify([product]));
          //   Navigate("/productdetailes");
          // }}
        >
          <div className="product-image">
          <Link to={`/productdetailes/${product._id}`}>
                <img src={product.image} />
              </Link>
          </div>
          <div className="product-description">
            <p>Title:{product.title}</p>
            <p>Description:{product.description}</p>
            <p>Price:{product.price}</p>
            <p>Amount:{product.amount}</p>
            {/* <button
              onClick={(e) => {
                setCart([...cart, product]);
              }}
            >
              add to cart
            </button>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
            <p>{counter}</p>
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button> */}
          </div>
        </div>
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
