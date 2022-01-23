import { useState } from "react";
import axios from "axios";
import "./Register.css";
//create funtion component for register
const Register = () => {
  //create a local component states for all variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [massege, setMassege] = useState("");
  //create an obj to hold state
  const registerInfo = { firstName, lastName, age, country, email, password };

  //create function to change state according inputs
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const register = () => {
    axios
      .post("http://localhost:5000/register", registerInfo)
      .then((result) => {
        console.log(result);
        setMassege(result.data.message);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setMassege(err.response.data.message);
      });
  };

  return (
    <div className="register">
      <label for="chk" aria-hidden="true">
        Register
      </label>
      <input
        className="register-inp"
        type="text"
        placeholder="First Name"
        onChange={changeFirstName}
      ></input>
      <br />
      <input
        className="register-inp"
        type="text"
        placeholder="Last Name"
        onChange={changeLastName}
      ></input>
      <br />

      <input
        className="register-inp"
        type="number"
        placeholder="Age"
        onChange={changeAge}
      ></input>
      <br />

      <input
        className="register-inp"
        type="text"
        placeholder="Country"
        onChange={changeCountry}
      ></input>
      <br />

      <input
        className="register-inp"
        type="email"
        placeholder="Email"
        onChange={changeEmail}
      ></input>
      <br />

      <input
        className="register-inp"
        type="password"
        placeholder="Password"
        onChange={changePassword}
      ></input>
      <br />

      <button className="login-btn" onClick={register}>
        Register
      </button>
      <p>{massege}</p>
    </div>
  );
};
export default Register;
