import React, { useState } from "react";
import { Button, Card, OurServicesCard } from "../components/index";
// import { title } from "motion/react-client";
// import {Logo} from '../assets/Logo.jpg'
function Home() {
  const networkPartnersOne = [
    {
      company: "ARK ROOT FINANCIAL SERVICES",
      text: "is a trusted name in the field of finance, investment, and business consultancy.",
      img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      company: "NIDE DESIGN STUDIO",
      text: "is a creative practice specializing in architecture, interior design, and spatial planning. Known for its innovative and functional approach, the studio blends design excellence with practical solutions tailored to client needs.",
      img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      company: "SPIRE RISK ADVISORS LLP",
      text: "is a management consulting and risk advisory consultancy offering a comprehensive range of services spanning audit, taxation, corporate law, risk management, and internal controls.",
      img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const networkPartnersTwo = [
    {
      company: "DRISHTIENCY",
      text: "is a creative agency that blends design, strategy, and storytelling to help brands communicate with impact. Specializing in branding, digital design, and marketing solutions, it works with professionals, businesses, and startups to build strong and meaningful brand identities.",
      img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      company: "NETRA REALTY SOLUTIONS PVT. LTD.",
      text: "is a professional real estate consultancy specializing in property transactions, redevelopment advisory, and real estate management services.",
      img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const servicePartner = [
    {
      title: "CORPORATE & COMMERCIAL ADVISORY",
      text: "We assist businesses and entrepreneurs with strategic legal guidance to navigate corporate and commercial challenges. Our services include drafting and vetting of contracts, compliance advisory, corporate structuring, shareholder agreements, management, and business risk advisory. With a practical approach, we ensure businesses remain legally secure while achieving their growth objectives.",
    },
    {
      title: "PROPERTY & REAL ESTATE LITIGATION",
      text: "From title disputes and redevelopment conflicts to SRA and conveyance matters, we represent clients in all aspects of property and real estate litigation. Our team ensures thorough due diligence, precise documentation, and strong representation before courts and tribunals, safeguarding your most valuable assets.",
    },
    {
      title: "FAMILY DISPUTES & ESTATE PLANNING",
      text: "We provide compassionate and solution-oriented counsel in sensitive matters such as inheritance disputes, succession planning, wills, and probate. Our expertise extends to drafting testamentary documents, advising on estate distribution, and representing clients in family property conflicts. We aim to protect both legal rights and family relationships through structured planning and effective resolution.",
    },
    {
      title: "CHEQUE BOUNCE & FINANCIAL DISPUTES",
      text: "We have extensive experience in handling matters under Section 138 of the Negotiable Instruments Act and other financial disputes. Whether representing complainants or respondents, we ensure robust representation, strategic advice, and quick resolutions to safeguard financial interests.",
    },
    {
      title: "DISPUTE RESOLUTION",
      text: "We believe not every conflict needs to end in a courtroom battle. Our dispute resolution services focus on negotiation, mediation, and structured settlements that save time, cost, and stress. We adopt a client-centric approach to achieve practical solutions while protecting legal interests.",
    },
    {
      title: "ARBITRATION AND CONCILIATION",
      text: "With rising commercial complexities, arbitration and conciliation have become essential alternatives to litigation. We represent clients in domestic and institutional arbitrations, guiding them through drafting arbitration clauses, initiating proceedings, and ensuring effective resolution of disputes in a time-bound manner.",
    },
  ];
  const [isModalOpen ,setisModalOpen] = useState(false)
  return (
    <div className="font-Levenim bg-[#F8F6F1] w-full space-y-6">
      <div className="first-page flex flex-col md:flex-row-reverse min-h-screen">
        {/* Main logo section */}
        <div className="w-full h-screen md:w-1/2 flex justify-center items-center bg-[#D6D2C4]">
          {/* Logo */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pravakta Legal Associates"
              className="size-50 mx-auto"
            />
            <h1 className="font-[1000] text-3xl mt-8 text-[#605047] inline-block text-center">
              PRAVAKTA LEGAL ASSOCIATES
            </h1>
          </div>
        </div>
        {/* learn More section */}
        <div className="w-full py-8 md:py-0 md:w-1/2 flex items-center justify-center">
          <div className="max-w-[400px] space-y-10">
            {/* logo */}
            <div className="w-full flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pravakta Legal Associates"
                className="size-15"
              />
              <h1 className="font-normal text-lg mt-1.5 text-[#615148]">
                PRAVAKTA LEGAL ASSOCIATES
              </h1>
            </div>
            <p className="text-center text-5xl text-[#303030] font-normal">
              PROVIDING TAILORED LEGAL COUNSEL AND SOLUTIONS
            </p>
            <p className="text-center text-lg max-w-sm">
              From Courtroom Representation to Strategic Advisory - We've Got
              You Covered.
            </p>
            {/* TODO: add onclick for btn */}
            <div className="w-full flex justify-center">
              <Button className="px-12">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="second-page md:min-h-screen p-4 flex flex-col md:flex-row">
        {/* Handshake image */}
        <div className=" w-full md:w-1/2 ">
          <img
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" handshake image"
            className="h-full w-full rounded-sm"
          />
        </div>
        <div className="md:p-20 md:w-1/2 space-y-6 mt-20 md:mt-0 md:space-y-8">
          <h1 className="font-extrabold text-2xl md:text-3xl text-[#303030]">
            GET THE EDGE YOU NEED.
          </h1>
          <p className=" text-[#605047] font-semibold md:tracking-widest tracking-wide ">
            At Pravakta Legal Associates, we believe that law is not just about
            resolving disputes - it is about creating clarity, certainty, and
            confidence for our clients. Founded by Adv. Mansi Jain, the firm is
            built on the values of integrity, precision, and client-first
            solutions.
          </p>
          <p className=" text-[#605047] font-semibold md:tracking-widest tracking-wide">
            We specialize in both litigation and non-litigation services,
            offering end-to-end legal support to individuals, businesses, and
            housing societies. From representing clients before courts,
            tribunals, and arbitral forums, to drafting, advisory, and
            compliance work, our approach is always tailored to the client's
            unique needs.
          </p>
          <Button className="px-1 mt-10 " onClick = {()=>{setisModalOpen(true)}}>BOOK A CONSULTATION</Button>
        </div>
      </div>
      <div className="third-page md:min-h-screen mt-20 w-full">
        <h1 className="text-3xl font-extrabold text-[#605047] text-center block my-3">
          OUR NETWORK PARTNERS
        </h1>
        <div className="p-2 mt-10">
          <div className="flex flex-col space-y-6 md:flex-row md:justify-between items-center md:items-start">
            {networkPartnersOne.map((eachPartner) => (
              <Card
                key={eachPartner.company}
                company={eachPartner.company}
                img={eachPartner.img}
                text={eachPartner.text}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-6 md:flex-row mt-6 md:justify-center md:space-x-2 items-center md:items-start">
            {networkPartnersTwo.map((eachPartner) => (
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
      <div className="fourth-page min-h-screen p-3 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 flex flex-col items-center ">
          <h1 className="font-extrabold text-4xl text-[#303030] mb-10">
            OUR SERVICES
          </h1>
          <div className="py-10">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="law"
              className="h-50 w-80 rounded-sm"
            />

            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="law"
              className="h-50 w-80 rounded-sm mt-18"
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-2 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
          {" "}
          {/* TODO: try auto-rows-fr */}
          {servicePartner.map((eachPartner) => (
            <OurServicesCard
              key={eachPartner.title}
              title={eachPartner.title}
              text={eachPartner.text}
              className="justify-self-center"
            />
          ))}
        </div>
      </div>
      <div className="sixth-page min-h-screen flex flex-col md:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pravakta legal associates"
          className="w-full md:w-1/2"
        />
        <div className="flex w-full md:w-1/2 items-center justify-center py-10 px-3 md:px-0 md:py-0">
          <div className="w-full max-w-[350px] text-[#303030] space-y-8">
            <h1 className="text-4xl ">CONTACT US TODAY</h1>
            <div className="mt-2 space-y-1">
              <p>
                <span className="font-semibold">Tel.</span> +91 9145465447
              </p>
              <p>
                <span className="font-semibold">Email: </span>{" "}
                mansi@pravaktalegal.com
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span> PRAVAKTA LEGAL
                ASSOCIATES
              </p>
              <p>
                <span className="font-semibold">Instagram</span> @pravakta_legal
              </p>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Office :</p>
              <p className="tracking-wide text-justify">
                Office No. 9, Gokul Sapphire, Besides Muljibai Mehta
                International School, Gokul Township, Virar West ,Palghar-401303 
              </p>
            </div>
            <Button className="mt-10 w-full bg-[#303030]" onClick = {()=>{setisModalOpen(true)}}>
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="absolute">heyyy</div> */}
    </div>
  );
}

export default Home;
