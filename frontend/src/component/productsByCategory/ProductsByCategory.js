import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const ProductsByCategory = ({}) => {
  const [productCategory, setProductCategory] = useState([]);
  //create pagination use states
  const [currentPage, setCurrentPage] = useState(1);
  //
  const [productsPerPage, setProductsPerPage] = useState(5);
  //logic for pagination

  const indexOfLastProduct = currentPage * productsPerPage;
  ////////////
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  //////////////////////////
  const currentProducts = productCategory.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  //create params
  let { category } = useParams();
  console.log(category);
  //create function to get product by category
  const getProductByCategory = (category) => {
    axios
      .get(`http://localhost:5000/product/get/${category}`)
      .then((result) => {
        setProductCategory(result.data.products);
        console.log(result);
      });
  };

  useEffect(() => {
    getProductByCategory(category);
  }, []);
console.log(currentProducts);
  const products =
  currentProducts.length &&
  currentProducts.map((product) => {
      return (

        <div className="product" key={product._id}>
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
       
       
      );
    });

  return (
    <>
    <div className="products">
      {products ? products : <p>There is no products</p>}
    </div>
     <Pagination productsPerPage={productsPerPage}
     totalProducts={productCategory.length}
     paginate={paginate}></Pagination>
     </>
  );
};

export default ProductsByCategory;
