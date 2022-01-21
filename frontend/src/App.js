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
import Home from "./component/Home/Home";
function App() {
  //create a global state for token
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [productDetailes, setProductDetailes] = useState([]);
  const [UpdateId, setUpdateId] = useState("");
  const [isopen, setIsopen] = useState(false);
  //array of products get from getallproducts function
  const [result, setResult] = useState([]);

  //create usestate for product searchParam

  ////////////
  const [productId, setProductId] = useState("");
  //create pagination use states
  const [currentPage, setCurrentPage] = useState(1);
  //
  const [productsPerPage, setProductsPerPage] = useState(4);
  //logic for pagination

  const indexOfLastProduct = currentPage * productsPerPage;
  ////////////
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  //////////////////////////
  const currentProducts = result.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  ////////////////////////////////////
  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setResult(result.data.products);
      })
      .then((err) => {});
  };

  //////////////////////////////

  return (
    <div className="App">
      <Header setIsopen={setIsopen} isopen={isopen} />
      {isopen ? <Category /> : null}

      <Routes>
      <Route path="/" element={<Home/>} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/products"
          element={
            <Products
            setCart={setCart}
              cart={cart}
              getAllProducts={getAllProducts}
              resultpage={currentProducts}
              productsPerPage={productsPerPage}
              totalProducts={result.length}
              paginate={paginate}
              setProductId={setProductId}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        ></Route>
        <Route path="/category/:category" element={<ProductsByCategory setCart={setCart}
              cart={cart}
              getAllProducts={getAllProducts}
              resultpage={currentProducts}
              productsPerPage={productsPerPage}
              totalProducts={result.length}
              paginate={paginate}
              setProductId={setProductId}/>} />
        <Route
          path="/productdetailes/:id"
          element={
            <ProductDetailes
              setCart={setCart}
              cart={cart}
              productDetailes={productDetailes}
              setUpdateId={setUpdateId}
              // token={token}
              // getAllProducts={getAllProducts}
              productId={productId}
            />
          }
        />
        <Route
          path="/search/:title"
          element={
            <Search
              setProductDetailes={setProductDetailes}
              getAllProducts={getAllProducts}
              setResult={setResult}
              result={result}
            />
          }
        />
        <Route
          path="/update/:id"
          element={<Update UpdateId={UpdateId} token={token} />}
        ></Route>
        <Route path="/create" element={<Create token={token} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
