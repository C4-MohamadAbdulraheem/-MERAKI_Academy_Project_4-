import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css";

const Products = ({ setCart, cart }) => {
  const [result, setResult] = useState([]);
  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setResult(result.data.products);
      })
      .then((err) => {});
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  //create function to add products to cart
  // const addToCart = (e) => {
  //   setCart([...cart,product])
  // };
  const products =
    result.length &&
    result.map((product) => {
      return (
        <div className="product" key={product._id}>
          <div className="product-image">
            <img src={product.image} />
          </div>
          <div className="product-description">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>amount</p>
            <button
              onClick={(e) => {
                setCart([...cart, product]);
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className="products">
      {products ? products : <p>There is no products</p>}
    </div>
  );
};

export default Products;
