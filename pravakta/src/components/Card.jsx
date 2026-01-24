import React from "react";

export default function Card({ company, img, text }) {
  return (
    <div className="w-full max-w-sm p-2">
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
    </div>
  );
}
