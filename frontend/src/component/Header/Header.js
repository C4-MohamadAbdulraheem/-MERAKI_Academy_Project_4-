import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

const Header = ({setIsopen,isopen}) => {
  return (
    <div className="header">
      <header>
        <h1>E-commerce</h1>
      </header>
      <div className="search">
        <input placeholder="Search" className="serach-btn" type="text" />
        <button type="button" className="serach-btn">
          serach
        </button>
      </div>

      <Navigation setIsopen={setIsopen} isopen={isopen} />

    </div>
  );
};

export default Header;
