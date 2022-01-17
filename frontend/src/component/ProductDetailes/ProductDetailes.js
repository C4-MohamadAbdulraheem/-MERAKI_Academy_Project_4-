import "./ProductDetailes.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
const ProductDetailes = ({
  setCart,
  cart,
  productDetailes,
  setUpdateId,
  token,
}) => {
  const localToken = localStorage.getItem("token");
  const product = JSON.parse(localStorage.getItem("product"));
  console.log(product);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const role = localToken && decode(localToken).role.role;
  console.log(role);

  console.log(localToken);

  ///
  const deleteProducts = (id) => {
    axios
      .delete(`http://localhost:5000/product/delete/${id}`, {
        headers: {
          Authorization: `Basic ${localToken}`,
        },
      })
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
  const products =
    product.length &&
    product.map((product) => {
      return (
        <div className="product" key={product._id}>
          <div className="product-image">
            <img src={product.image} />
          </div>
          <div className="product-description">
            <p> Title:{product.title}</p>
            <p>Description:{product.description}</p>
            <p>Price:{product.price}</p>
            <p>amount:{product.ammount}</p>
            {localToken?(<>
            <button
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
            </button></>):null}
            
            <div className="comments">
              <p>comments</p>
              {product.comment &&
                product.comment.map((comment) => {
                  return (
                    <div>
                      <p>comment:{comment.comment}</p>
                      <p>
                        commenter:
                        {comment.commenter && comment.commenter.firstName}
                      </p>
                    </div>
                  );
                })}
            </div>
            {role === "ADMIN" ? (
              <>
                <button
                  onClick={() => {
                    setUpdateId(product._id);
                    navigate("/update");
                  }}
                >
                  Update
                </button>

                <button
                  onClick={(e) => {
                    let confirmMessage = window.confirm(
                      "Are you sure to delete product"
                    );
                    if (confirmMessage) {
                      deleteProducts(product._id);

                      navigate("/products");
                    }
                  }}
                >
                  Delete
                </button>
                <p>{message}</p>
              </>
            ) : null}
          </div>
        </div>
      );
    });
  return (
    <div className="product-detailes">
      {products ? products : <p>Error While Reloding page</p>}
    </div>
  );
};

export default ProductDetailes;
