import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  const products =
    cart.length &&
    cart.map((product) => {
      return (
        <div className="product" key={product._id}>
          <div className="product-image">
            <img src={product.image} />
          </div>
          <div className="product-description">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.number }</p>
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
