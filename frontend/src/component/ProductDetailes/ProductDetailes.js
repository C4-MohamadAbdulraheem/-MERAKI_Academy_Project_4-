import  "./ProductDetailes.css"
import { useState, useEffect } from "react";
const ProductDetailes = ({ setCart, cart,productDetailes}) => {
  const [counter, setCounter] = useState(0);
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
            <p>amount</p>
            <button
              onClick={(e) => {
                setCart([...cart, product]);
              }}
            >
              add to cart
            </button>
            <button onClick={()=>{
              setCounter(counter+1)
            }}>+</button>
            <p>{counter}</p>
            <button onClick={()=>{
              setCounter(counter-1)
            }}>-</button>


          </div>
        </div>
      );
    });
    return (
        <div className="product-detailes">

            
        </div>
    )
}

export default ProductDetailes
