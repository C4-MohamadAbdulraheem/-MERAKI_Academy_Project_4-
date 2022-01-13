import { useState } from "react";
import axios from 'axios'
//create funtion component for register
const Register = () => {
  //create a local component states for all variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState([])
  const [error, setError] = useState([])
  //create an obj to hold state 
  const registerInfo = {firstName,lastName,age,country,email,password}
  console.log(registerInfo);

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
  
  

  const register = ()=>{
      axios.post("http://localhost:5000/register/",registerInfo).then((result)=>{
          console.log(result);
          setResult(result)
      }).catch((err)=>{
        console.log(err.message);
          setError(err)
      })
  }

  return (
    <div className="register">
      <input type="text" placeholder="First Name" onChange={changeFirstName}></input>
      <input type="text" placeholder="Last Name" onChange={changeLastName}></input>
      <input type="number" placeholder="Age" onChange={changeAge}></input>
      <input type="text" placeholder="Country" onChange={changeCountry}></input>
      <input type="email" placeholder="Email" onChange={changeEmail}></input>
      <input type="password" placeholder="Password" onChange={changePassword}></input>
      <button onClick={register}>Register</button>
    </div>
  );
};
export default Register;
