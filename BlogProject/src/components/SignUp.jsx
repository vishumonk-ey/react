import React, { useState } from "react";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/AuthSlice";
import useForm from "react-hook-form";
import Input from "./Input";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
function SignUp() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async (data) => {
    setError("");
    try {
      const newUser = await authService.createAccount(data);
      console.log("when signing up , this is being returned !", newUser);
      if (newUser) {
        const newUserData = await authService.getUser();
        if (newUserData) {
          dispatch(storeLogin(newUserData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Create an account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account ?
          <Link
            to="/login"
            className="font-medium transition-all duration-200 hover:underline"
          >
            Log In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      </div>
      <form>
        <div className="space-y-4">
          <div className="space-x-2 flex flex-wrap">
            <Input
              label="Name :"
              type="text"
              placeholder="Enter your name..."
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">Name can't be empty !</p>
            )}
          </div>
          <div className="space-x-2 flex flex-wrap">
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email..."
              {...register("email", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                Please enter a valid Email!
              </p>
            )}
          </div>
          <div className="space-x-2 flex flex-wrap">
            <Input
              label="Password:"
              type="password"
              placeholder="Create Password..."
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                Create an appropriate Password!
              </p>
            )}
          </div>
          <button type="submit" className="px-4 py-1.5 bg-green-600">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
