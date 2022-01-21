import "./ProductDetailes.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2'
import { plus, minus } from "react-icons/fa";
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
  const [reviewMessage, setreviewMessage] = useState("");
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
        //create main div for product
        <div className="main">
          <div className="product" key={product._id}>
            {/*////////////////////////////////*/}
            <div className="product-image">
              <img
                src={product.image}
                style={{ height: "500px", height: "550px" }}
              />
            </div>
            {/*////////////////////////////////*/}
            <div className="product-description">
              {/*////////////////////////////////*/}

              {/* <div className="product-description-1"> */}
              {/*////////////////////////////////*/}

              {/*////////////////////////////////*/}

              <span className="title">{product.title}</span>
              <span className="description">
                |Description : {product.description}{" "}
              </span>
              <span className="category">
                |Category : {product.category || "mobile phone"}
              </span>
              <span className="amount">
                |Available Ammount : {product.amount || 10}
              </span>

              <div className="add-to-product">
                <div className="qty">
                  <button
                    className="button-55"
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    +
                  </button>
                  <p style={{ color: "#6d44b8" }}>{counter}</p>
                  <button
                    className="button-55"
                    onClick={() => {
                      setCounter(counter - 1);
                    }}
                  >
                    -{" "}
                  </button>
                </div>
                <button
                  className="button-58"
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
                  Add to Cart
                </button>
              </div>
              <Link to="#" onClick={(e) => {
                if (localToken) {
                  setIsClicked(!isClicked)
                }else{setreviewMessage("Login to show reviwes")}
                 }}>show reviews</Link>
              {localToken?null:<Link to="/login">{reviewMessage}</Link>}

              {role === "ADMIN" ? (
              <div className="admin-btn">
                <button
                className="button-58"
                  onClick={() => {
                    setUpdateId(product._id);
                    navigate(`/update/${product._id}`);
                  }}
                >
                  Update
                </button>

                <button
                className="button-58"
                  onClick={(e) => {
                    let confirmMessage = Swal.fire({
                      title: "Are you sure to delete product?",
                      showDenyButton: true,
                      showCancelButton: true,
                      confirmButtonText: 'Delete',
                      denyButtonText: `Don't Delete`,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        Swal.fire('Saved!', '', 'success')
                        deleteProducts(product._id);

                       navigate("/products");
                      } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                      }
                    })
                  
                    // if (confirmMessage) {
                    //   deleteProducts(product._id);

                    //   navigate("/products");
                    // }
                  }}
                >
                  Delete
                </button>
                <p>{message}</p>
              </div>
            ) : null}



              {/*////////////////////////////////*/}
              {/* <span className="review">WRITE A REVIEW</span>
                  <div className="qty">
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
                      -{" "}
                    </button>
                  </div>
                
            
              <div className="product-title-2">
                <span className="price">
                  <span className="currency">J.D</span> {product.price}
                </span>
                <span
                  className="add-to-cart"
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
                  Add TO CART
                </span>
              </div> */}
              {/* </div> */}
              {/*////////////////////////////////*/}

              <div className="product-description-2">
                {/*////////////////////////////////*/}
                {/* <div className="description">
  <span className="brief">{product.description}</span>
  <div className="descrip">
<span>Category</span>
<span>Elctonics</span>
  </div>
  <div className="descrip">
<span>Sub-category</span>
<span>{product.category}</span>
  </div>
  <div className="descrip">
<span>Delivery</span>
<span>5 J.D</span>
  </div>
  <div className="descrip">
<span>Colors Available</span>
<div className="colors-avil">
<span></span>
<span></span>
<span></span>

<span></span>

</div>
  </div>
</div> */}
              </div>
            </div>
          </div>
          {isClicked&&localToken?<div className="Reviewes">
            <div className="comment">
              <span style={{ color: "black" }}>Reviewes</span>
              {product.comment.length ? (
                product.comment.map((comment) => {
                  return (
                    <div className="Review">
                      <div className="commenter">
                        <img
                          src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
                          style={{ width: "5%", height: "5%" }}
                        />
                        {comment.commenter &&
                          comment.commenter.firstName +
                            " " +
                            comment.commenter.lastName}
                      </div>
                      <p className="comment" style={{ width: "100%" }}>
                        {comment.comment}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p>There aren't Reviewes on product</p>
              )}
            </div>
            <div className="add-review">
              <textarea type="textarea" placeholder="write your review" rows="18" cols="50"  onChange={(e) => {
                   setComment(e.target.value);
                 }}/>
              <button className="button-58" onClick={(e) =>localToken?createComment(product._id):null}>Post Review</button>
            </div>
          </div>:null}
        </div>

        // <div className="product" key={product._id}>
        //   <div className="product-image">
        //     <img src={product.image} />
        //   </div>
        //   <div className="product-description">
        //     <p> Title:{product.title}</p>
        //     <p>Description:{product.description}</p>
        //     <p>Price:{product.price}</p>
        //     <p>amount:{product.ammount}</p>
        //     {localToken ? (
        //       <>
        //         <button
        //           onClick={(e) => {
        //             setCart([...cart, { ...product, number: counter }]);

        //             console.log(cart);
        //             if (localStorage.getItem("productCart") == null) {
        //               localStorage.setItem("productCart", []);
        //             }

        //             localStorage.setItem(
        //               "productCart",
        //               JSON.stringify([...cart, { ...product, number: counter }])
        //             );
        //           }}
        //         >
        //           add to cart
        //         </button>
        //         <button
        //           onClick={() => {
        //             setCounter(counter + 1);
        //           }}
        //         >
        //           +
        //         </button>
        //         <p>{counter}</p>
        //         <button
        //           onClick={() => {
        //             setCounter(counter - 1);
        //           }}
        //         >
        //           -
        //         </button>
        //       </>
        //     ) : null}

        //     <div className="comments">
        //       <p>comments</p>
        //       {product.comment &&
        //         product.comment.map((comment) => {
        //           return (
        //             <div>
        //               <p>comment:{comment.comment}</p>
        //               <p>
        //                 commenter:
        //                 {comment.commenter && comment.commenter.firstName}
        //               </p>
        //             </div>
        //           );
        //         })}
        //     </div>
        //     {isClicked ? (
        //       <input
        //         type="text"
        //         placeholder=" comment"
        //         onChange={(e) => {
        //           setComment(e.target.value);
        //         }}
        //       />
        //     ) : null}
        //     <button
        //       onClick={() => {
        //         if (!comment) {
        //           setIsClicked(!isClicked);
        //         } else {
        //           createComment(product._id);
        //           setIsClicked(!isClicked);
        //         }
        //       }}
        //     >
        //       Add comment
        //     </button>
        //     {role === "ADMIN" ? (
        //       <>
        //         <button
        //           onClick={() => {
        //             setUpdateId(product._id);

        //             navigate("/update");
        //           }}
        //         >
        //           Update
        //         </button>

        //         <button
        //           onClick={(e) => {
        //             let confirmMessage = window.confirm(
        //               "Are you sure to delete product"
        //             );
        //             if (confirmMessage) {
        //               deleteProducts(product._id);

        //               navigate("/products");
        //             }
        //           }}
        //         >
        //           Delete
        //         </button>
        //         <p>{message}</p>
        //       </>
        //     ) : null}
        //   </div>
        // </div>
      );
    });
  return (
    <div className="product-detailes">
      {products ? products : <p>Error While Reloding page</p>}
    </div>
  );
};

export default ProductDetailes;
