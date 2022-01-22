import React, { useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import {BiShowAlt}from "react-icons/bi"
import{AiOutlineShoppingCart}from "react-icons/ai"
import {BsCartX}from "react-icons/bs"

const Cart = ({ cart, setCart ,setProductId}) => {
  const navigate = useNavigate()
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
        <>
          <div
            className="productes"
            key={product._id}
            onClick={() => {
              setProductId(product._id);
            }}
          >
            <div >
              <Link to={`/productdetailes/${product._id}`}>
                <img src={product.image} style={{height: '340.98px',width: '362.14'}}/>
              </Link>
            </div>
            <div className="productes-description">
              <span className="title">{product.title.substring(-1,30)+"..."}</span>
              <p>{product.description.substring(-1,70)+"..."}</p>
              <span >Amount : {product.number} </span>
              <span className="price">Price : {product.price} J.D</span>
              

              <div className="productes-btn">
              <Link to={`/productdetailes/${product._id}`}  style={{borderRight:"1px solid rgb(211, 206, 206)", paddingLeft: "10%"}}><BiShowAlt/> Show Product</Link>
              <Link to="#" onClick={() => handleRemove(product._id)}> <BsCartX/> Remove  Cart</Link>


            </div>
            </div>
            
          </div>
        </>
      );
    });
  return (
    <div className="main-cart">
    <div className="all-products">
      {products ? products : <p>There is no products</p>}
    </div>
    {productCart.length?<button onClick={() => navigate("/order")}
    className="button-58" style={{width: ""}}>Order</button>:null}
    </div>
  );
};

export default Cart;