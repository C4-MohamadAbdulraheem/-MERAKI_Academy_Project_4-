import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./Products.css";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Products = ({
  getAllProducts,

  productsPerPage,
  totalProducts,
  paginate,
  resultpage,

  setProductId,
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
        <>
          <div
            className="product"
            key={product._id}
            onClick={() => {
              setProductId(product._id);
            }}
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
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
