import Register from "./component/Register/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login.js";
import Products from "./component/Products/Products.js";
import Cart from "./component/Cart/Cart";
import ProductDetailes from "./component/ProductDetailes/ProductDetailes";
import Update from "./component/Update/Update";
import Create from "./component/Create/Create";
import Category from "./component/Category/Category";
import axios from "axios";
import "./App.css";
import ProductsByCategory from "./component/productsByCategory/ProductsByCategory";
import Search from "./component/Search/Search";
function App() {
  //create a global state for token
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [productDetailes, setProductDetailes] = useState([]);
  const [UpdateId, setUpdateId] = useState("");
  const [isopen, setIsopen] = useState(false);
  const [result, setResult] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  //create usestate for product searchParam
  const [productSearch, setProductSearch] = useState([]);
  console.log(productDetailes);
  console.log(cart);

  ////////////////////////////////////
  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setResult(result.data.products);
      })
      .then((err) => {});
  };
  console.log(isopen);

  return (
    <div className="App">
      <Header
        setIsopen={setIsopen}
        isopen={isopen}
        setProductSearch={setProductSearch}
      />
      {isopen ? <Category setProductCategory={setProductCategory} /> : null}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/products"
          element={
            <Products
              setProductDetailes={setProductDetailes}
              getAllProducts={getAllProducts}
              setResult={setResult}
              result={result}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        ></Route>
        <Route
          path="category"
          element={
            <ProductsByCategory
              productCategory={productCategory}
              setProductDetailes={setProductDetailes}
              getAllProducts={getAllProducts}
              setResult={setResult}
              result={result}
            />
          }
        />
        <Route
          path="/productdetailes"
          element={
            <ProductDetailes
              setCart={setCart}
              cart={cart}
              productDetailes={productDetailes}
              setUpdateId={setUpdateId}
              token={token}
              getAllProducts={getAllProducts}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              setProductDetailes={setProductDetailes}
              getAllProducts={getAllProducts}
              setResult={setResult}
              result={result}
              productSearch={productSearch}
            />
          }
        />
        <Route
          path="/update"
          element={<Update UpdateId={UpdateId} token={token} />}
        ></Route>
        <Route path="/create" element={<Create token={token} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
