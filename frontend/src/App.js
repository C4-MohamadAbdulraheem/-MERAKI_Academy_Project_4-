import Register from "./component/Register/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login.js";
import Products from "./component/Products/Products.js";
import Cart from "./component/Cart/Cart";
import ProductDetailes from "./component/ProductDetailes/ProductDetailes";
import Update from "./component/Update/Update"
import Create from "./component/Create/Create"

import "./App.css";

function App() {
  //create a global state for token
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [productDetailes, setProductDetailes] = useState([]);
  const [UpdateId, setUpdateId] = useState("")
  console.log(productDetailes);
  console.log(cart);
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/products"
          element={<Products setProductDetailes={setProductDetailes} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart= {setCart}/>}></Route>
        <Route
          path="/productdetailes"
          element={
            <ProductDetailes
              setCart={setCart}
              cart={cart}
              productDetailes={productDetailes}
              setUpdateId={setUpdateId}
              token={token}
            />
          }
        />
        <Route path="/update" element={<Update UpdateId={UpdateId} token={token} />}></Route>
        <Route path="/create" element={<Create token={token}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
