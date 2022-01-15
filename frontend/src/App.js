import Register from "./component/Register/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login.js";
import Products from "./component/Products/Products.js";
import Cart from "./component/Cart/Cart";
import ProductDetailes from "./component/ProductDetailes/ProductDetailes"
import "./App.css";


function App() {
  //create a global state for token
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [productDetailes, setProductDetailes] = useState([])
  console.log(productDetailes);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/products"
          element={<Products  setProductDetailes={setProductDetailes} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
        <Route path="/productdetailes"  element={<ProductDetailes setCart={setCart} cart={cart} productDetailes={productDetailes}/>}/>
      </Routes>
    </div>
  );
}

export default App;
