import React, { useState }from "react";
import Navigation from "./Navigation";
import "./Header.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsopen, isopen, setProductSearch }) => {
  const [title, setTitle] = useState("");
  const navigate =useNavigate()
  const search = () => {
    axios
      .get(`http://localhost:5000/product/search/${title}`)
      .then((result) => {
        setProductSearch(result.data.products);
        
      })
      .then((err) => {});
  };
  return (
    <div className="header">
      <header>
        <h1>E-commerce</h1>
      </header>
      <div className="search">
        <input
          placeholder="Search"
          className="serach-btn"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="button" className="serach-btn" onClick={()=>{
          search()
          navigate("/search")
        }}>
          serach
        </button>
      </div>

      <Navigation setIsopen={setIsopen} isopen={isopen} />
    </div>
  );
};

export default Header;
