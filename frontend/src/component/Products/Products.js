import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css";

const Products = ({ setCart, cart, setProductDetailes }) => {
  const [result, setResult] = useState([]);
  const [counter, setCounter] = useState(0);

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

  const products =
    result.length &&
    result.map((product) => {
      return (
        <div
          className="product"
          key={product._id}
          onClick={() => {
            setProductDetailes([product]);
          }}
        >
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
