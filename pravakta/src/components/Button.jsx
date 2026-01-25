import React from "react";
// import {} from "../"
import { motion } from "framer-motion";
function Button({ children, className = " ", ...props }) {
  return (
    <motion.button
      className={`px-8 py-4 rounded-sm bg-[#605047] duration-100 linear transition-all hover:bg-[#766358]  cursor-pointer ${className}`}
      {...props}
      whileHover={{
        // scale:1.05 ,
        translateY: -5,
      }}
      whileTap={{
        translateY: 0,
      }}
    >
      <span className="text-white">{children}</span>
    </motion.button>
  );
}

export default Button;
