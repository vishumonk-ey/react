import React from "react";
import { motion } from "motion/react";
function Button() {
  return (
    <div
      className="bg-neutral-900 h-screen flex items-center justify-center perspective-[1000px] transform-3d"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.2) 0.5px , transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX : 20,
          // translateX : -5 ,
          translateY : -5 ,
          // boxShadow : "0px 0px 2px 5px rgba(255,255,255,0.3)"  ,
          boxShadow : "0px 20px 50px rgba(255,255,255,0.3)"  ,
          // rotateY : 20,
          // rotateZ: 20
        }}
        style={{
          translateZ : 100
        }}
        whileTap={{
          translateY:0
        }}
        className="text-xl text-gray-300 px-12 py-4 bg-black rounded-lg inset-shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)] relative group"
      >
        <span className="group-hover:text-cyan-500 transition-colors ease-in-out duration-300">Grind</span>
        <span className="absolute h-px left-0 right-0 w-3/4 mx-auto bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent "></span>
        <span className="absolute h-[4px] left-0 right-0 w-3/4 mx-auto bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></span>
      </motion.button>
    </div>
  );
}

export default Button;
