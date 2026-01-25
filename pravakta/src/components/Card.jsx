import React from "react";
import { motion } from "framer-motion";
export default function Card({ company, img, text }) {
  return (
    <motion.div className="w-full max-w-sm p-2 hover:scale-105 duration-300 ease-in-out"             initial={{
              translateY: 50,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
>
      <div className="h-40 w-60 mx-auto flex justify-center items-center">
        <img
          src={img}
          alt={company}
          className="rounded-sm max-h-full max-w-full mx-auto"
        />
      </div>
      <p className="px-2 mt-3.5 text-center">
        <span className="text-[#605047] font-bold">{company}</span> {text}
      </p>
    </motion.div>
  );
}
