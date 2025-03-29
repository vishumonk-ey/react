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
        className={`outline-none px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 border border-gray-50 w-full duration-200 ${className}`}
        {...props}
      />
    </div>
  );
});
//forwardRef is necesaary bcoz only then our component can get access of ref from the parent ...
// parent component creates a reference , with the help of forwardRef child component gets access to the ref and then the parent can access the valuee of the input.
export default Input;
