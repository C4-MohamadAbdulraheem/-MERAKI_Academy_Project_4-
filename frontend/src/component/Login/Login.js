import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleLogin from "react-google-login";
const Login = ({ setToken }) => {
  //create a state local variable for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [isLogged, setIsLogged] = useState(false)
  const loginInfo = { email, password };
  const navigate = useNavigate();

  //create functions for storing input values inside states

  const responseGoogle = (result) => {
    localStorage.setItem("token", result.tokenId);
    navigate("/");
    console.log(result);
  };

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
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);

        navigate("/");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
  return (
    <div>
      <label for="chk" aria-hidden="true">
        Log in
      </label>
      <br />
      <input
        className="login-inp"
        type="text"
        placeholder="Email"
        onChange={changeEmail}
      />
      <br />
      <input
        className="login-inp"
        type="password"
        placeholder="password"
        onChange={changePassword}
      />
      <br />
      <p
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={() => {
          navigate("/register");
        }}
      >
        create an account
      </p>
      <br />
      <button className="login-btn" onClick={login}>
        Login
      </button>
      <div className="google-login">
        <GoogleLogin
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Login;

// style={{
//   display: "flex",
//   width: "100%",
//   justifyContent: "center",
//   cursor: "pointer",
//   alignItems: "center",
// }}
