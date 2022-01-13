import Register from "./component/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login";
import Home from "./component/Home";
function App() {
  //create a global state for token
  const [token, setToken] = useState("")
  return (
    <div className="App">
      <Header />
      <Home/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />

      </Routes>
    </div>
  );
}

export default App;
