import { Cross, X } from "lucide";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
function Modal({ isModalOpen, setisModalOpen }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [query, setQuery] = useState("");
  // const [isError, setisError] = useState({
  //   userEmail: false,
  //   contactNo: false,
  // });
  const sendConsultation = async (userName, userEmail, contactNo, query) => {
    try {
      const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const contactNoRe = /^[6-9]\d{9}$/;
      if (!emailRe.test(userEmail)) {
        addToast({
          title: "Incorrect Email",
          description: "Please enter valid email",
          color: "danger",
        });
      } else if (!contactNoRe.test(contactNo)) {
        addToast({
          title: "Invalid Number",
          description: "Please enter valid number",
          color: "danger",
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
          addToast({
            title: "Something went wrong",
            description: "Please try again later",
            color: "danger",
          });
          setisModalOpen(false);
          return;
        }
        const status = await res.json();
        if (status) {
          addToast({
            title: "Consultation booked",
            description: "We will shortly contact you ! ",
            color: "success",
          });
          setisModalOpen(false);
          return;
        } else {
          addToast({
            title: "Something went wrong",
            description: "Please try again later",
            color: "danger",
          });
          setisModalOpen(false);
          return;
        }
      }
    } catch (error) {
      console.log("Error occured while sending the mail !", error);
      addToast({
        title: "Something went wrong",
        description: "Please try again later",
        color: "danger",
      });
      setisModalOpen(false);
      return;
    }
  };
  return (
    <div
      className="absolute inset-0 flex justify-center items-center  bg-gray-500"
      onClick={() => setisModalOpen(!isModalOpen)}
    >
      <div
        className="w-full max-w-sm rounded-md bg-white px-3 py-4 absolute"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Enter Details </h1>
          <button
            className="p-2 rounded-lg hover:bg-[#E5E7EB] duration-300 ease-in-out"
            onClick={() => setisModalOpen(false)}
          >
            <X className=" size-5" />
          </button>
        </div>
        <p className="w-full h-[1px] bg-[#E5E7EB]"></p>
        {/* input section */}
        <div className="w-full space-y-2">
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
            placeholder=""
            value={contactNo}
            setValue={setContactNo}
          />
          <Input
            id="Query"
            label="Query"
            placeholder="Enter your query here ..."
            value={query}
            setValue={setQuery}
          />
        </div>
        <Button onClick={() => {
          sendConsultation(userName , userEmail , contactNo ,query)
        }}>Confirm consultation</Button>
      </div>
    </div>
  );
}

export default Modal;
