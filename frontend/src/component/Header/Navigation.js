import { Link, linkes } from "react-router-dom";
import decode from "jwt-decode";
import { useState } from "react";
import Category from "../Category/Category";
import "./Header.css";
import Dropdown from "react-dropdown";
import{AiFillHome,AiFillAppstore} from "react-icons/ai"
import {BiCategoryAlt} from "react-icons/bi"
import {IoIosCreate} from "react-icons/io"
import {IoCartSharp} from "react-icons/io5"
import {MdLogin,MdLogout} from "react-icons/md"
import {RiLoginBoxFill} from "react-icons/ri"
const Navigation = ({ setIsopen, isopen }) => {
  const localToken = localStorage.getItem("token");
  const role = localToken && decode(localToken).role.role;
  const firstName = localToken && decode(localToken).firstName;

  // const firstName = decode(localToken).firstName;
  // console.log(firstName);
  console.log(firstName);
  console.log(isopen);
  //////////////////////////

  return (
    <div className="nav">
      <div className="nav-1">

      
      <Link to="/" className="link"> <AiFillHome/> Home</Link>
      <Link to="/products" className="link">
        <AiFillAppstore/> Products
      </Link>
      <Link
      to="#"
        className="link"
        onClick={() => {
          setIsopen(!isopen);
        }}
      >
        <BiCategoryAlt/> Categories
      </Link>
      {localToken?<Link to="/cart" className="link">
       <IoCartSharp/> cart
      </Link>:null}
      </div>
      <div className="nav-2">
      {localToken?null:<Link to="/login" className="link">
        <MdLogin/> Login
      </Link>}
      {localToken?null:<Link to="/register" className="link">
        <RiLoginBoxFill/> Register
      </Link>}
      {role === "ADMIN" ? (
        <Link to="/create" className="link">
         <IoIosCreate/> Create Product
        </Link>
      ) : null}
      {/* <Link
       
        className="link"
        onClick={() => {
          setIsopen(!isopen);
          console.log(isopen);
        }}
      >
        Category
      </Link> */}
      

      {role ? (
        <Link
          className="link"
          to="/login"
          onClick={() => {
            localStorage.clear();
            role = null;
          }}
        >
         <MdLogout/> Log out
        </Link>
      ) : null}
      </div>
    </div>
  );
};

export default Navigation;
