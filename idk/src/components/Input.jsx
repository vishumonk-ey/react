import React from "react";
import { forwardRef, useId } from "react";
const Input = forwardRef(({ type = "text", label, placeholder, className,...props },ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 inline-block">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`outline-none px-3 py-2 rounded-lg bg-gray-200/50 text-black focus:bg-gray-50 border border-gray-50 w-full duration-200 ${className}`}
      />
    </div>
  );
});
//forwardRef is necesaary bcoz only then our component can get access of ref from the parent ...
// whenever i will change the value then onChange will be triggered which is passed to us by the react hook form
// parent component creates a reference , with the help of forwardRef child component gets access to the ref and then the parent can access the valuee of the input.
export default Input;
