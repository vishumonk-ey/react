import { Cross, X } from "lucide";
import React, { useState } from "react";
import Input from "./Input"
import Button from "./Button"
function Modal({ isModalOpen, setisModalOpen }) {
  const [userName , setUserName] = useState("")
  const [userEmail , setUserEmail] = useState("")
  const [contactNo , setContactNo] = useState("")
  const [query , setQuery] = useState("")
  const [isError , setisError] = useState(
    {
      userEmail : false ,
      contactNo : false
    }
  )
  const sendConsultation = async(userName,userEmail,contactNo,query)=>{
    try {
      const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const contactNoRe = /^[6-9]\d{9}$/
      if(emailRe.test(userEmail) && contactNoRe.test(contactNo)){
          const data = {
            userEmail ,
            userName ,
            contactNo ,
            query
          }
          const status = await fetch("" ,
            {
              method : 'POST', 
              headers : 'application/json' ,
              body : JSON.stringify(data)
            }
          ) //TODO:add URL
          if(status){
            window.alert("Your consultation have been successfully booked . We will contact you shortly !")
            setisModalOpen(false)
          }else{
            window.alert("Some error occured , Please tru again!")
          }
      }

    } catch (error) {
      
    }
  }
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
          <Input id="userName" label="Name" placeholder="Name" value={userName} setValue={setUserName} />
          <Input id="userEmail" label="Email" placeholder="Name@gmail.com" value={userEmail} setValue={setUserEmail} isError={isError.userEmail} />
          <Input id="contactNo" label="Contact No" placeholder="" value={contactNo} setValue={setContactNo} isError={isError.contactNo} />
          <Input id="Query" label="Query" placeholder="Enter your query here ..." value={query} setValue={setQuery} />
        </div>
        <Button onClick={()=>{}}>
            Confirm consultation
        </Button>
      </div>
    </div>
  );
}

export default Modal;
