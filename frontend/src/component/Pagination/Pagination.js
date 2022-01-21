import React from "react";
import "./Pagination.css"

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(totalProducts);
  return (
    <div className="pagination">
      {/* <ul className="pagination"> */}
        {pageNumbers.map((number) => (
          // <li key={number} className="pagin-list">
            <a onClick={() => paginate(number)} href="#" className="pagin-link" >
              {number}
            </a>
          // </li>
        ))}
      {/* </ul> */}
    </div>
  );
};

export default Pagination;
