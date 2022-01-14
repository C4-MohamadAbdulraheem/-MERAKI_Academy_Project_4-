import Register from "./component/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login";
import Products from "./component/Products";
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
