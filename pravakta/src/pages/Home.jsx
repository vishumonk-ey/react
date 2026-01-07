import React from "react";
import { Button, Card, OurServicesCard } from "../components/index";
function Home() {
  const networkPartners = [{}];
  return (
    <div className="font-Levenim bg-[#F8F6F1] w-full">
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
            <Button className="mx-auto">LEARN MORE</Button>
          </div>
        </div>
      </div>
      <div className="second-page h-screen flex flex-col md:flex-row">
        {/* Handshake image */}
        <div className=" w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" handshake image"
            className="h-full w-full"
          />
        </div>
        <div className="p-5">
          <h1 className="font-bold text-2xl text-[#303030]">
            GET THE EDGE YOU NEED.
          </h1>
          <p className="mt-2 text-[#605047] font-semibold">
            At Pravakta Legal Associates, we believe that law is not just about
            resolving disputes - it is about creating clarity, certainty, and
            confidence for our clients. Founded by Adv. Mansi Jain, the firm is
            built on the values of integrity, precision, and client-first
            solutions.
          </p>
          <p className="mt-2 text-[#605047] font-semibold">
            We specialize in both litigation and non-litigation services,
            offering end-to-end legal support to individuals, businesses, and
            housing societies. From representing clients before courts,
            tribunals, and arbitral forums, to drafting, advisory, and
            compliance work, our approach is always tailored to the client's
            unique needs.
          </p>
          <Button className="px-1 mt-4">BOOK A CONSULTATION</Button>
        </div>
      </div>
      <div className="third-page h-screen">
        <h1 className="text-3xl font-bold text-[#605047] mx-auto my-3">
          OUR NETWORK PARTNERS
        </h1>
        <div className="p-2">
          {networkPartners.map((eachPartner) => (
            <Card
              key={eachPartner.company}
              company={eachPartner.company}
              img={eachPartner.img}
              text={eachPartner.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
