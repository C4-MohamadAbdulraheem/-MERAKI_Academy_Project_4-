import React, { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {BsSearch} from "react-icons/bs"

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
          type="search" placeholder="Search here ..."
          className="serach-inp"
          
          onChange={(e) => {
            setTitle(e.target.value);
            e.key = "enter";
          }}
        />
        {title ? (
          <Link type="button" className="serach-btn" to={`/search/${title}`} >
            <BsSearch  className="serach-btn" onClick={(e) => e.key == "enter"} />
          </Link>
        ) : (
          <BsSearch/>
        )}
      </div>

      <Navigation setIsopen={setIsopen} isopen={isopen} />
    </div>
  );
};

export default Header;
{/* <input type="search" placeholder="Search here ..."> */}
  // <i class="fa fa-search"></i>