import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import {Logo} from "../components/index";
import { Input } from "../components/index";
import {Button} from "../components/index"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const signup = async (data) => {
    setError("");
    try {
      const loggedInUserData = await authService.signUp(data);
      if (loggedInUserData) {
        dispatch(authlogin(loggedInUserData));
        navigate("/")
      }
    } catch (error) {
      console.log("error in signup in", error);
      setError(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-lg bg-gray-100 rounded-2xl p-10 border border-black/10">
        <div className="flex flex-col items-center">
          <Logo width={"100%"} />
          <h2 className="font-bold text-2xl text-center leading-tight">
            Create an account
          </h2>
          <p className="mt-2 text-center text-black/60">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-400/50 font-medium hover:underline "
            >
              Log In
            </Link>
          </p>
          {/* for errors */}
          {error && (
            <p className="text-red-500 mt-8 text-center">{error.message}</p>
          )}
        </div>

        <form onSubmit={handleSubmit(signup)}>
          <div className="space-y-3">
            <div className="space-y-2">
                <Input placeholder="Name" label="Name : "
                {...register("name",{
                    required : true
                })}/>
                {errors.name && <p className="text-red-600 mt-8 text-center">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Email"
                label="Email : "
                {...register("email", {
                  required: true,
                  // validate ---> yaha pattern matching karva dena last me ..
                })}
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
          <Button className="hover:bg-orange-400 w-full mt-6">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
