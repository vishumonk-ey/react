import React from "react";
// import {} from "../"
function Button({ children ,className = " " , ...props }) {
  return (
    <button className= {`px-8 py-4 rounded-sm bg-[#605047] duration-300 ease-in-out transition-all hover:bg-[#766358] cursor-pointer ${className}`}  {...props}>
      <span className="text-white">{children}</span>
    </button>
  );
}

export default Button;
