import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/AuthSlice'
import authService from "../../appwrite/auth"
function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logOut()
        .then( ()=>{
            dispatch(logout())
        })
        .catch(
            (err)=> {
                console.log("HandleLogout error",err)
            }
        )
    }
  return (
    <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={handleLogout}
    >LogOut</button>  
)
}

export default LogoutBtn