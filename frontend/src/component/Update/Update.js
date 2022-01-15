import axios from "axios";
import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ UpdateId, token }) => {
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ammount, setAmmount] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const updateInfo = { title, description, price, ammount, image };
  const updateProduct = (id) => {
    axios
      .put(`http://localhost:5000/product/update/${id}`, updateInfo, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((result) => {
        setMessage("Product Updated");
      }).catch((err)=>{
        setMessage("error while updated")
      })
  };
  return (
    <div>
      <p>Update Product</p>
      <input
        placeholder="Title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        placeholder="Description"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <input
        placeholder="Price"
        type="text"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <input
        placeholder="Ammount"
        type="text"
        onChange={(e) => {
          setAmmount(e.target.value);
        }}
      ></input>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      {/* <input placeholder="Title" type="text"></input>
      <input placeholder="Title" type="text"></input> */}
      <button
        onClick={() => {
          updateProduct(UpdateId);
        }}
      >
        Update
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Update;
