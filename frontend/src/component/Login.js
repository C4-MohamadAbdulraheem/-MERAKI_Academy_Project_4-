import { axios } from "axios"

Axios
const Login = () => {
    //create a state local variable for login
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginInfo = {email,password}

    //create functions for storing input values inside states 
    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }

    const changePassword = (e)=>{
        setPassword(e.target.value)
    }
    const login = ()=>{
axios.post("http://localhost:5000/")
    }
    return (
        <div>
          <input type="text" placeholder="Email" onChange={changeEmail}/>
          <br/>
          <input type="text" placeholder="password" onChange={changePassword}/>
          <br/>
          <button>Login</button>  

        </div>
    )
}

export default Login
