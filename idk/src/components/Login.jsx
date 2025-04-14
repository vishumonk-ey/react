import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import {Logo} from "../components/index";
import { Input } from "../components/index";
import {Button} from "../components/index"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const login = async (data) => {
    setError("");
    try {
      const sessionInfo = await authService.logIn(data);
      if (sessionInfo) {
        // dispatch(authlogin(loggedInUserData));
        // navigate("/")
        const userData = await authService.getCurrentuser()
        if (userData) {
          dispatch(authlogin(userData))
          navigate("/")
        }

      }
    } catch (error) {
      console.log("error in logging in", error);
      setError(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-lg bg-gray-100 rounded-2xl p-10 border border-black/10">
        <div className="flex flex-col items-center">
          <Logo width={"100%"} />
          <h2 className="font-bold text-2xl text-center leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-black/60">
            Don't have any account?
            <Link
              to="/signup"
              className="text-blue-400/50 font-medium hover:underline "
            >
              Sign Up
            </Link>
          </p>
          {/* for errors */}
          {error && (
            <p className="text-red-500 mt-8 text-center">{error.message}</p>
          )}
        </div>

        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <div className="space-y-2">
              <Input
                placeholder="Email"
                label="Email : "
                {...register("email", {
                  required: true,
                  // validate ---> yaha pattern matching karva dena last me ..
                })}
                // register returns an object with name , onChange , onBlur event listener and it is spreaded to pass on to our input component 
              />
              {errors.email && (
                <p className="text-red-600 text-center">{error.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Password"
                label="Password : "
                {...register("password", {
                  required: true,
                  // validate :
                })}
              />
              {errors.pass && (
                <p className="text-red-600 mt-8 text-center">{errors.pass}</p>
              )}
            </div>
          </div>
          <Button className="hover:bg-orange-400 w-full mt-6">Log In</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
