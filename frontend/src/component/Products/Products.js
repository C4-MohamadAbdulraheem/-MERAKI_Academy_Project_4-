import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./Products.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Products = ({
  setCart,
  cart,
  setProductDetailes,
  getAllProducts,
  result,
  setResult,
  productsPerPage,
  totalProducts,
  paginate,
  resultpage,
  getProductById,
  setProductId
  
}) => {
  const [counter, setCounter] = useState(0);

  const Navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  
  
console.log(totalProducts);
  const products =
  resultpage.length &&
  resultpage.map((product) => {
      return (
        <div
          className="product"
          key={product._id}
          onClick={() => {
            // setProductDetailes([product]);
            // localStorage.setItem("product", JSON.stringify([product]));
            getProductById(product._id)
            setProductId(product._id)
            Navigate("/productdetailes");
          }}
        >
          <div className="product-image">
            <img src={product.image} />
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
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
