import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [result, setResult] = useState();
  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        console.log(result);
        setResult(result.data.products);
      })
      .then((err) => {});
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  //   return(<p>products</p>)
  return (
    <div>
      {result
        ? result.map((ele) => {
            return (
              <div>
                <p>{ele.title}</p>
                <p>{ele.description}</p>
                <p>{ele.price}</p>
              </div>
            );
          })
        : "there is no products to show"}
    </div>
  );
};

export default Home;
