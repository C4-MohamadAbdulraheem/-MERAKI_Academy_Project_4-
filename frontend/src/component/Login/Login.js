import axios from "axios";
import { useState } from "react";
import "./Login.css"

const Login = ({ setToken }) => {
  //create a state local variable for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loginInfo = { email, password };

  //create functions for storing input values inside states
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    axios
      .post("http://localhost:5000/login", loginInfo)
      .then((result) => {
        setMessage(result.data.message);
        setToken(result.data.token);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
  return (
    <div>
      <input type="text" placeholder="Email" onChange={changeEmail} />
      <br />
      <input type="password" placeholder="password" onChange={changePassword} />
      <br />
      <button onClick={login}>Login</button>
      <div>{message}</div>
    </div>
  );
};

export default Login;
