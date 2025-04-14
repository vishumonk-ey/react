import React, { useState } from "react";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/AuthSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from './Input'
import Buttons from './Buttons'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.logIn(data);
      console.log("Login method is returning : ",session);
      if (session) {
        const userData = await authService.getUser();
        console.log("get user returns : ",userData);
        
        if (userData) {
          dispatch(storeLogin(userData));
        }
        navigate("/"); // navigate ka benefit is i dont have to manually click or something as compared to link method .
        // userData milne ke baad i logged in because store me mai status aur userData store kar raha hu so i need userData
      }
      console.log("try block ran");
      
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <div className="w-full items-center justify-center flex ">
      <div className="mx-auto w-full  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            Logo
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don't have any account ?
          <Link
            to="/signup"
            className="font-medium transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error.message}</p>}
        <form
          onSubmit={handleSubmit(login)} // handleSubmit is my method so it will execute while rendering or declaring(whats the correct term to say) right?
          // and also while submitting i wwould have to prevent default right?
         //   handleSubmit is basically like a wrapper which will catch the event and prevent default and then do all the validation and if all things are validated then login function is called with formData 
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center space-x-4">
              {/* might be UI errors */}
              <Input
                label="Email:"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  // validate : {
                  //     matchPattern: (val) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || "Email address should be valid address."
                  // }
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.email && <p className="text-sm text-red-500">Please enter an appropriate email.</p>} 
              {/* whenever there is an error in email , i want the exact error like whether it is empty or pattern isn't matching. how do i achieve this? */}
            </div>
            <div className="flex flex-wrap items-center space-x-4">
                <Input 
                    label="Password"
                    placeholder = "Enter Your Password..."
                    type = "password"
                    {...register("password" , {
                            required : true ,
                            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                    })}
                />
                {errors.password && 
                <p className="text-sm text-red-500"> Please enter an appropriate password.</p>}
            </div>
            <Buttons className="w-full">Log In</Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
