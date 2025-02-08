import React from "react";

function Buttons({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      className={`hover:bg-blue-200 px-4 py-2 rounded-lg 
        ${bgColor} ${textColor} ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;
