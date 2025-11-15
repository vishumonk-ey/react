import React, { forwardRef, useId } from "react";
// what is the need of forward ref

//-----> when we are creating a custom component for our form , then we have to always give forward the ref. of it , if so then why?

// i could've focused the input without using this by giving some specific id to the input box and apply focus class on it when clicked on a btn , but 
//  i would have to access that by document.getElementById("my-specific-id") which will search throughout the document but in case of useRef it gives me the direct access to that dom element
// forwardRef is used for transferring the reference
const Input   = forwardRef(
  ({ label, placeholder, type = "text", className = "", ...props },ref) => {
    console.log("this is my ref",ref);
    
    const id = useId(); // what was the need for this?
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor= {id}>
            {label}
          </label>
        )}
        <input
          placeholder={placeholder}
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref} // what is this doing???
          {...props}
          id={id} // whats the need of id here?--> basically connecting the label and my input box .
        ></input>
      </div>
    );
  }
);
export default Input;
