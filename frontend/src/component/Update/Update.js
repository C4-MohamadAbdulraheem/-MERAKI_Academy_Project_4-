import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Update.css";

const Update = ({ UpdateId, token }) => {
  const locaToken = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ammount, setAmmount] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const updateInfo = { title, description, price, ammount, image };
  const updateId = JSON.parse(localStorage.getItem("product"))[0]._id;
  console.log(updateId);
  console.log(image);
  const updateProduct = (id) => {
    axios
      .put(`http://localhost:5000/product/update/${id}`, updateInfo, {
        headers: {
          Authorization: `Basic ${locaToken}`,
        },
      })
      .then((result) => {
        setMessage("Product Updated");
      })
      .catch((err) => {
        setMessage("error while updated");
      });
  };
  return (
    <div>
      <label for="chk" aria-hidden="true">
        Update Product
      </label>
      <input
        className="update-inp"
        placeholder="Title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />

      <input
        className="update-inp"
        placeholder="Description"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <input
        className="update-inp"
        placeholder="Price"
        type="text"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <br />
      <input
        className="update-inp"
        placeholder="Ammount"
        type="text"
        onChange={(e) => {
          setAmmount(e.target.value);
        }}
      ></input>
      <br />
      <input
        className="update-inp"
        type="file"
        onChange={(e) => {
          setImage(URL.createObjectURL(e.target.files[0]));
        }}
      ></input>
      {/* <input placeholder="Title" type="text"></input>
      <input placeholder="Title" type="text"></input> */}
      <br />
      <button
        className="update-btn"
        onClick={() => {
          updateProduct(updateId);
        }}
      >
        Update
      </button>
      <br />
      <p>{message}</p>
    </div>
  );
};

export default Update;
