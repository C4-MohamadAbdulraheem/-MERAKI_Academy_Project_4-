import React, { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import decode from "jwt-decode";
import {BsBag} from "react-icons/bs"

const Header = ({ setIsopen, isopen, setProductSearch }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const localToken = localStorage.getItem("token");
  const firstName = localToken && decode(localToken).firstName;
  const lastName = localToken && decode(localToken).lastName;
  return (
    <div className="main-header">
      <div className="header">
        <header >
          <h1 style={{ color:"white",display:"flex" ,alignItems: "center" ,height: "100%"}}><span><BsBag/></span>store<span style={{color:"#DBD0F2"}}>Book</span></h1>
        </header>
        <div className="search">
          <input
            type="search"
            placeholder="Search here ..."
            className="serach-inp"
            onChange={(e) => {
              setTitle(e.target.value);
              ;
            }}
          />
          {title ? (
          <Link to={`/search/${title}`}>  <button type="button" className="serach-btn" >
              <BsSearch
              
                
              />
            </button></Link> 
          ) : (
            <button className="serach-btn"><BsSearch /></button>
          )}
        </div>
        {localToken?<span style={{display: 'flex',alignItems: 'center' ,gap:"2%" ,width:"15%"}}>
          <img
            src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
            style={{ width: "10%", height: "10%" }}
          /> {firstName + " "+lastName}
        </span>:null}
      </div>

      <Navigation setIsopen={setIsopen} isopen={isopen} />
    </div>
  );
};

export default Header;
{
  /* <input type="search" placeholder="Search here ..."> */
}
// <i class="fa fa-search"></i>
