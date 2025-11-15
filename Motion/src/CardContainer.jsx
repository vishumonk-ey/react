import React from "react";
import Card from "./Card";
// import { GeistSans } from "geist/font/sans";
function CardContainer() {
  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-gray-400 `}
    >
      <Card />
    </div>
  );
}

export default CardContainer;
