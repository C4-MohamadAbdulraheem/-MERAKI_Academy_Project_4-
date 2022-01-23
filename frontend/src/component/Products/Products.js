import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./Products.css";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = ({
  getAllProducts,
  setCart,
  cart,
  productsPerPage,
  totalProducts,
  paginate,
  resultpage,

  setProductId,
}) => {
  const [counter, setCounter] = useState(1);

  const Navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(totalProducts);
  const products =
    resultpage.length &&
    resultpage.map((product) => {
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
                    setCart([...cart, { ...product, number: counter }]);
                    console.log(cart);
                    if (localStorage.getItem("productCart") == null) {
                      localStorage.setItem("productCart", []);
                    }

                    localStorage.setItem(
                      "productCart",
                      JSON.stringify([...cart, { ...product, number: counter }])
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
      <div className="all-products">
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
