import React, { useState } from "react";
import { motion } from "motion/react";
function Login() {
  const [isModalOpen, setisModalOpen] = useState(true);
  const [error , setError] = useState({})
  const handleSubmit = () => {

  }
//   if re-render to handleSubmit ka definition will change ? and in all the components where i have provided handleSubmit as OnCLick they will re-render ?
  return (
    <div
      className=" flex justify-center items-center h-screen bg-neutral-800 perspective-[1000px] p-2"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 5px, rgba(255,255,255,0.2) 1px , transparent 0)",
        backgroundRepeat: "repeat",
        backgroundSize: "10px 10px",
      }}
    >
      <motion.button
        className="px-12 py-4 rounded-lg text-gray-300 inset-shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)] bg-black group ease-in-out duration-100 relative"
        whileTap={{
          translateY: 7,
        }}
        style={{
          // translateY : -5 ,
          translateZ: 50,
        }}
      >
        <span className="font-semibold group-hover:text-cyan-700 ease-in-out duration-300">
          {" "}
          Login{" "}
        </span>
        <span className="absolute h-[1px] w-3/4  bottom-0 left-1/2 -translate-x-1/2 mx-auto bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 duration-300 ease-in-out group-hover:opacity-100 blur-xs"></span>
      </motion.button>
      {isModalOpen && (
        <div className="absolute mx-auto w-[90%] md:w-1/2 h-20 bg-blue-200">
          <div className="w-full items-center justify-center flex ">
            <div className="mx-auto w-full  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
              <div className="mb-2 flex justify-center ">
                <span className="inline-block w-full max-w-[100px]">Logo</span>
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
              </h2>

              <p className="mt-2 text-center text-base text-black/60">
                Don't have any account ?
                <Link
                  to="#"
                  className="font-medium transition-all duration-200 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
             
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
                      
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        Please enter an appropriate email.
                      </p>
                    )}
                    {/* whenever there is an error in email , i want the exact error like whether it is empty or pattern isn't matching. how do i achieve this? */}
                  </div>
                  <div className="flex flex-wrap items-center space-x-4">
                    <Input
                      label="Password"
                      placeholder="Enter Your Password..."
                      type="password"
                      {...register("password", {
                        required: true,
                        // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      })}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {" "}
                        Please enter an appropriate password.
                      </p>
                    )}
                  </div>
                  <Buttons className="w-full">Log In</Buttons>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
