import axios from "axios";
import { useState } from "react";
import "./Create.css";
const Create = () => {
  const locaToken = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ammount, setAmmount] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const createInfo = { title, description, price, ammount, image };
  console.log(createInfo);
  const createProduct = () => {
    axios
      .post("http://localhost:5000/product/create", createInfo, {
        headers: {
          Authorization: `Basic ${locaToken}`,
        },
      })
      .then((result) => {
        setMessage("Product Updated");
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };
  return (
    <div>
      <label for="chk" aria-hidden="true">
        Create Product
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
          createProduct();
        }}
      >
        Create
      </button>
      <br />
      <p>{message}</p>
    </div>
  );
};

export default Create;
