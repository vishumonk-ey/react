import React from "react";
// import {} from "../"
function Button({ children ,className = " " , ...props }) {
  return (
    <button className= {`px-6 py-4 rounded-sm bg-[#605047] ${className}`}  {...props}>
      <span className="text-white">{children}</span>
    </button>
  );
}

export default Button;
