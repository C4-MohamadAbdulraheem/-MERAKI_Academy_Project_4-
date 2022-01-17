import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const productCart = JSON.parse(localStorage.getItem("productCart"));
  console.log(productCart);
  const handleRemove = (id) => {
    const filter = productCart.filter((ele) => ele._id !== id);

    if (filter) {
      setCart(filter);

      localStorage.setItem("productCart", JSON.stringify(filter));
    }
  };

  const products =
    productCart &&
    productCart.length &&
    productCart.map((product, index) => {
      return (
        <div className="product" key={index}>
          <div className="product-image">
            <img src={product.image} />
          </div>
          <div className="product-description">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.number}</p>
            <button onClick={() => handleRemove(product._id)}>
              remove from cart
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

export default Cart;
