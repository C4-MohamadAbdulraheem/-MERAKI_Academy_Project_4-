import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import "./Update.css";

const Update = ({ UpdateId, token }) => {
  const locaToken = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ammount, setAmmount] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const updateInfo = { title, description, price, ammount, image, category };
  const navigate = useNavigate();
  // const updateId = JSON.parse(localStorage.getItem("product"))[0]._id;
  // console.log(updateId);
  // console.log(image);
  const { id } = useParams();
  const updateProduct = (id) => {
    axios
      .patch(`http://localhost:5000/product/update/${id}`, updateInfo, {
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
    <div className="update">
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
        placeholder="category"
        type="text"
        onChange={(e) => {
          setCategory(e.target.value);
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
        placeholder="Iamge"
        className="update-inp"
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
          // setImage(URL.createObjectURL(e.target.files[0]));
        }}
      ></input>
      {/* <input placeholder="Title" type="text"></input>
      <input placeholder="Title" type="text"></input> */}
      <br />
      <button
        className="update-btn"
        onClick={() => {
          Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              updateProduct(id);
              navigate(`/productdetailes/${id}`);
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
          // updateProduct(id);
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
