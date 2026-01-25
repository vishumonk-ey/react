import React from "react";
import { motion } from "framer-motion";
export default function OurServicesCard({ title, text, className = "" }) {
  return (
    <motion.div className={`w-full max-w-[400px] ${className}`} 
      initial = {{
        opacity : 0 ,
        filter : "blur(10px)" ,
        translateY : 5
      }}
      whileInView = {{
        opacity : 1 ,
        filter : "blur(0px)" ,
        translateY : 0
      }}
      transition={{
        duration : 0.8 ,
        ease : "easeInOut"
      }}
      viewport={{
        once : true
      }}
    >
      <h1 className="text-[#303030] text-2xl font-semibold text-center">
        {title}
      </h1>
      <p className="mt-2 text-justify">{text}</p>
    </motion.div>
  );
}
