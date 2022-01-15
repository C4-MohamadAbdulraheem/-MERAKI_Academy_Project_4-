import "./ProductDetailes.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const ProductDetailes = ({
  setCart,
  cart,
  productDetailes,
  setUpdateId,
  token,
}) => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  ///
  const deleteProducts = (id) => {
    axios
      .delete(`http://localhost:5000/product/delete/${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((result) => {
        setMessage("product deleted");
      })
      .catch((err) => {
        setMessage("error while delete product");
      });
  };
  const products =
    productDetailes.length &&
    productDetailes.map((product) => {
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
            <button
              onClick={(e) => {
                setCart([...cart, product]);
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
            </button>
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
                deleteProducts(product._id);
              }}
            >
              Delete
            </button>
            <p>{message}</p>
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
