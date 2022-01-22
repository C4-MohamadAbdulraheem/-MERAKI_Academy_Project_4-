import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Home.css"

const Home = () => {
    const navigate = useNavigate()
  return <div className="home">
      <button
      style={{display: 'flex'  ,marginLeft:"20%", justifyContent: 'center' ,textAlign: 'center' ,alignItems:"center"}}
      className="button-63" 
      onClick={()=>{
navigate("/products")
      }}>
          go to products page
      </button>
  </div>;
};

export default Home;
