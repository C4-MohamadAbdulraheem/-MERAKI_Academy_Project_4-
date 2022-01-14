import Register from "./component/Register/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login.js";
import Products from "./component/Products/Products.js";
import "./App.css"
// import "../src/component/Header/Header.css"
// import "../src/component/Header/Header.css"
// import "../src/component/Header/Header.css"
// import "../src/component/Header/Header.css"


function App() {
  //create a global state for token
  const [token, setToken] = useState("")
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/products" element={ <Products/>} />

      </Routes>
    </div>
  );
}

export default App;
