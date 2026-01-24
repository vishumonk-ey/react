import { Cross, X } from "lucide";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
function Modal({ isModalOpen, setisModalOpen }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [query, setQuery] = useState("");
  // const [formData , setFormData] = useState({
  //   userName : '' ,
  //   userEmail ; ''
  // })
  // useEffect(() => {
  //   console.log("ran : ", isModalOpen);
  //   if (!isModalOpen) {
  //     document.body.classList.remove("overflow-hidden");
  //   } else {
  //     document.body.classList.add("overflow-hidden");
  //   }
  //   return ()=>{
  //     console.log("Ran : " , isModalOpen);

  //       document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isModalOpen]);
  // const [isError, setisError] = useState({
  //   userEmail: false,
  //   contactNo: false,
  // });
  const sendConsultation = async (userName, userEmail, contactNo, query) => {
    try {
      const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const contactNoRe = /^[6-9]\d{9}$/;
      if (!userName.trim()) {
        toast.error("Please enter username", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      } else if (!userEmail.trim()) {
        toast.error("Please enter user email", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      } else if (!contactNo.trim()) {
        toast.error("Please enter contact number", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      } else {
        if (!emailRe.test(userEmail)) {
          toast.error("Please enter valid email", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        } else if (!contactNoRe.test(contactNo)) {
          toast.error("Please enter valid contact number", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        } else {
          const data = {
            userEmail,
            userName,
            contactNo,
            query,
          };
          const res = await fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }); //TODO:add URL , will return true or false
          if (!res.ok) {
            toast.error("Something went wrong", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
            });
            setisModalOpen(false);
            return;
          }
          const status = await res.json();
          if (status) {
            toast.success("Consultation Booked!", {
              position: "top-right",
              autoClose: 3000, // Closes after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return;
          } else {
            toast.error("Something went wrong", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
            });
            setisModalOpen(false);
            return;
          }
        }
      }
    } catch (error) {
      console.log("Error occured while sending the mail !", error);
      // addToast({
      //   title: "Something went wrong",
      //   description: "Please try again later",
      //   color: "danger",
      // });
      setisModalOpen(false);
      return;
    }
  };
  return (
    <div
      className="fixed inset-0 flex justify-center items-center backdrop-blur-sm p-5 shadow-xl shadow-black border border-black overflow-x-hidden"
      onClick={() => setisModalOpen(!isModalOpen)}
    >
      <div
        className="w-full max-w-md rounded-md bg-white p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl">Enter Details </h1>
          <button
            className="px-4 py-1 rounded-lg hover:bg-[#E5E7EB] duration-300 ease-in-out"
            onClick={() => setisModalOpen(false)}
          >
            {/* <X className="size-5"/> */}x
          </button>
        </div>
        <p className="w-full h-[1px] bg-[#E5E7EB] my-5"></p>
        {/* input section */}
        <div className="w-full space-y-4">
          <Input
            id="userName"
            label="Name"
            placeholder="Name"
            value={userName}
            setValue={setUserName}
          />
          <Input
            id="userEmail"
            label="Email"
            placeholder="Name@gmail.com"
            value={userEmail}
            setValue={setUserEmail}
          />
          <Input
            id="contactNo"
            label="Contact No"
            placeholder="1234567689"
            value={contactNo}
            setValue={setContactNo}
          />
          <Input
            id="Query"
            label="Query"
            placeholder="Enter your query here . ."
            value={query}
            setValue={setQuery}
          />
        </div>
        <Button
          onClick={() => {
            sendConsultation(userName, userEmail, contactNo, query);
          }}
          className="mt-10"
        >
          Submit
        </Button>
      </div>
      <ToastContainer className="w-20" />
    </div>
  );
}

export default Modal;
