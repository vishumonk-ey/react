import React,{useContext,useState} from "react";
import userContext from "../Context/UserContext";
function Login(){
    const {setUser} = useContext(userContext)
    const[pass,setPass] = useState("")
    const[username,setUsername] = useState("")
    const handleSubmit=()=>{
        setUser({username,pass})
    }
    return(
        <>
        <h2>Login !</h2>
        <input 
            type="text" 
            placeholder="Username"
            value={username} 
            onChange={
                (e)=>{setUsername(e.target.value)}
            }
            />
         <input
          type="text"
          placeholder="Password"
          value={pass}
          onChange={
            (e)=>setPass(e.target.value)
            }
          />
          <button
            onClick={handleSubmit}
          >Login</button>
        </>
    )
}
export default Login