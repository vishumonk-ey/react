import React,{useContext} from "react";
import userContext from "../Context/UserContext";
function Profile (){
    const {user}= useContext(userContext)

    if(!user) return <h2>Please Login</h2>

    return <h2>Welcome, {user.username}</h2>
}
export default Profile