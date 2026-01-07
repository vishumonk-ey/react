import React from "react";
import { Button, Card, OurServicesCard } from "../components/index";
function Home() {
  return (
    <div className="font-Levenim bg-[#F8F6F1]">
      <div className="first-page flex flex-col md:flex-row-reverse h-screen">
        {/* Main logo section */}
        <div className="w-full md:w-[1/2] flex justify-center items-center bg-[#D6D2C4]">
          {/* Logo */}
          <div>
            <img
              src="../assets/Logo.jpg"
              alt="Pravakta Legal Associates"
              className="size-10"
            />
            <h1 className="font-bold text-3xl mt-2.5 text-[#615148]">
              PRAVAKTA LEGAL ASSOCIATES
            </h1>
          </div>
        </div>
        {/* learn More section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="max-w-sm space-y-4">
            {/* logo */}
            <div className="w-full">
              <img
                src="../assets/Logo.jpg"
                alt="Pravakta Legal Associates"
                className="size-5 mx-auto"
              />
              <h1 className="font-normal text-lg mt-1.5 text-[#615148]">
                PRAVAKTA LEGAL ASSOCIATES
              </h1>
            </div>
            <p className="text-center text-4xl text-[#303030] font-semibold">
              PROVIDING TAILORED LEGAL COUNSEL AND SOLUTIONS
            </p>
            <p className="text-center">
              From Courtroom Representation to Strategic Advisory - We've Got
              You Covered.
            </p>
            TODO: add onclick for btn
            <Button className="mx-auto">
                LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
