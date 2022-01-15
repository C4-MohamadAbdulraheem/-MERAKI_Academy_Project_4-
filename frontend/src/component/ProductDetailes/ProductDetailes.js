import "./ProductDetailes.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom"
const ProductDetailes = ({ setCart, cart, productDetailes ,setUpdateId}) => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate()
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
          <button onClick={()=>{
            setUpdateId(product._id)
            navigate("/update")
          }}>Update</button>

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
