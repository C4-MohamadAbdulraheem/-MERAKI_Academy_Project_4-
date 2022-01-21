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
            className="productes"
            key={product._id}
            onClick={() => {
              setProductId(product._id);
            }}
          >
            <div >
              <Link to={`/productdetailes/${product._id}`}>
                <img src={product.image} style={{height: '379.98px',width: '362.14'}}/>
              </Link>
            </div>
            <div className="productes-description">
              <p>{product.title.substring(-1,20)+"..."}</p>
              <p>{product.description.substring(-1,70)+"..."}</p>
              <div className="productes-btn">
              <Link to="#" >Show Product</Link>
              <Link to="#">Add to Cart</Link>


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
