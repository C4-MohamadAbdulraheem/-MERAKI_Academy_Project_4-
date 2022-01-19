import React, { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setIsopen, isopen, setProductSearch }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
            e.key = "enter";
          }}
        />
        {title ? (
          <Link
            type="button"
            className="serach-btn"
            to={`/search/${title}`}
            // onClick={() => {
            //   search();
            //   navigate("/search");
            // }}
          >
            <button onClick={(e) => e.key == "enter"}>serach</button>
          </Link>
        ) : (
          <button>serach</button>
        )}
      </div>

      <Navigation setIsopen={setIsopen} isopen={isopen} />
    </div>
  );
};

export default Header;
