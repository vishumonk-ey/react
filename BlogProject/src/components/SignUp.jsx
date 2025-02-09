import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { login as storeLogin} from '../store/AuthSlice'
import useForm from 'react-hook-form'
import Input from './Input'
import Logo from './Logo'
import {useDispatch} from 'react-redux'
import {Link,NavLink} from 'react-router-dom'
function SignUp() {
    const [error,setError] = useState()
  return (
    <div>SignUp</div>
  )
}

export default SignUp