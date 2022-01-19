import "./ProductDetailes.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
const ProductDetailes = ({
  setCart,
  cart,
  setUpdateId,

  productId,
}) => {
  const localToken = localStorage.getItem("token");
  const product = JSON.parse(localStorage.getItem("product"));

  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [productDetailes, setProductDetailes] = useState([]);

  const [comments, setComments] = useState([]);
  const role = localToken && decode(localToken).role.role;
  console.log(role);
  const { id } = useParams();

  console.log(localToken);

  ///

  const getProductById = () => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((result) => {
        setProductDetailes([result.data.product]);
      })
      .catch((err) => {});
  };
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
  const createComment = (id) => {
    axios
      .post(
        `http://localhost:5000/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Basic ${localToken}`,
          },
        }
      )
      .then((result) => {
        setComments(result.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductById(productId);
  }, [comments]);

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
            {localToken ? (
              <>
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
                </button>
              </>
            ) : null}

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
            {isClicked ? (
              <input
                type="text"
                placeholder=" comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            ) : null}
            <button
              onClick={() => {
                if (!comment) {
                  setIsClicked(!isClicked);
                } else {
                  createComment(product._id);
                  setIsClicked(!isClicked);
                }
              }}
            >
              Add comment
            </button>
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
