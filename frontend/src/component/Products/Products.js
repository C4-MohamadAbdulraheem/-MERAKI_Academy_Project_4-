import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css";

// const Products = () => {
//   const [products, setproducts] = useState([]);

//   const getAllProducts = () => {
//     axios
//       .get(`http://localhost:5000/product`)
//       .then((response) => {
//         console.log(response);
//         setproducts(response.data.products);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   console.log(products.length);

//   const AllProductsFromDataBase = products.length
//     ? products.map((element) => {
//         return (
//           <div className="Products">
//             <div>
//               {" "}
//               <img src={element.image} />
//             </div>
//             <div>
//               {" "}
//               <p>Title :{element.title}</p>
//             </div>
//             <div>
//               {" "}
//               <p>| description :{element.description}</p>
//             </div>
//             <div>
//               {" "}
//               <p>| Price:{element.price}</p>
//             </div>
//             <div>
//               {" "}
//               <p>| amount :amount</p>{" "}
//             </div>

//             <div>
//               {" "}
//               {element.comments.length ? (
//                 element.comments.map((element) => {
//                   return (
//                     <div className="Comments">
//                       <div>
//                         | Comment: <p>{element.comment}</p>
//                       </div>
//                       <div>
//                         | Commenter Name: <p>{element.commenter.firstName}</p>
//                       </div>
//                       <div>
//                         | Populated on: <p>{element.createdAt}</p>
//                       </div>
//                       <div>
//                         | Updated on : <p>{element.updatedAt}</p>
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p>| Comments: No comments on this product</p>
//               )}
//             </div>
//             <div>
//               | Populated on: <p>{element.createdAt}</p>
//             </div>
//             <div>
//               | Updated on <p>{element.updatedAt}</p>
//             </div>
//           </div>
//         );
//       })
//     : null;

//   return (
//     <div>
//       {AllProductsFromDataBase ? (
//         AllProductsFromDataBase
//       ) : (
//         <p>No products in the page</p>
//       )}
//     </div>
//   );
// };
// export default Products;

const Products = () => {
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

  const products =
    result.length &&
    result.map((product) => {
      return (
        <div className="product" key={product._id}>
          <div className="product-image">
            <image src={product.image} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>amount</p>
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
