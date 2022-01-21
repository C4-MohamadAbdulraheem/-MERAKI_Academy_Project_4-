import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
  return <div>
      <button onClick={()=>{
navigate("/products")
      }}>
          go to products page
      </button>
  </div>;
};

export default Home;
