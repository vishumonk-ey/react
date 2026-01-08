import React from "react";
import { Button, Card, OurServicesCard } from "../components/index";
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
      title: 'CORPORATE & COMMERCIAL ADVISORY',
      text: 'We assist businesses and entrepreneurs with strategic legal guidance to navigate corporate and commercial challenges. Our services include drafting and vetting of contracts, compliance advisory, corporate structuring, shareholder agreements, management, and business risk advisory. With a practical approach, we ensure businesses remain legally secure while achieving their growth objectives.'
    },
    {
      title: 'PROPERTY & REAL ESTATE LITIGATION',
      text: 'From title disputes and redevelopment conflicts to SRA and conveyance matters, we represent clients in all aspects of property and real estate litigation. Our team ensures thorough due diligence, precise documentation, and strong representation before courts and tribunals, safeguarding your most valuable assets.'
    },
    {
      title: 'FAMILY DISPUTES & ESTATE PLANNING',
      text: 'We provide compassionate and solution-oriented counsel in sensitive matters such as inheritance disputes, succession planning, wills, and probate. Our expertise extends to drafting testamentary documents, advising on estate distribution, and representing clients in family property conflicts. We aim to protect both legal rights and family relationships through structured planning and effective resolution.'
    },
    {
      title: 'CHEQUE BOUNCE & FINANCIAL DISPUTES',
      text: 'We have extensive experience in handling matters under Section 138 of the Negotiable Instruments Act and other financial disputes. Whether representing complainants or respondents, we ensure robust representation, strategic advice, and quick resolutions to safeguard financial interests.'
    },
    {
      title: 'DISPUTE RESOLUTION',
      text: 'We believe not every conflict needs to end in a courtroom battle. Our dispute resolution services focus on negotiation, mediation, and structured settlements that save time, cost, and stress. We adopt a client-centric approach to achieve practical solutions while protecting legal interests.'
    },
    {
      title: 'ARBITRATION AND CONCILIATION',
      text: 'With rising commercial complexities, arbitration and conciliation have become essential alternatives to litigation. We represent clients in domestic and institutional arbitrations, guiding them through drafting arbitration clauses, initiating proceedings, and ensuring effective resolution of disputes in a time-bound manner.'
    }
  ];
  
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
          <div className="flex flex-col space-y-2 md:flex-row md:justify-between">
            {networkPartnersOne.map((eachPartner) => (
              <Card
                key={eachPartner.company}
                company={eachPartner.company}
                img={eachPartner.img}
                text={eachPartner.text}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:space-x-2">
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
      <div className="fourth-page h-screen p-3">
        <div className="w-1/4">
          <h1 className="font-bold text-3xl text-[#303030]">OUR SERVICES</h1>
           <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="law" className="h-4 w-7 mt-4"/>

           <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="law" className="h-4 w-7 mt-2"/>
        </div>
        <div className="w-3/4 p-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-1 gap-y-2"> TODO: try auto-rows-fr

            {servicePartner.map((eachPartner) => (
                <OurServicesCard title= {eachPartner.title} text={eachPartner.text}/>
            ))}
        </div>
      </div>
      <div className="sixth-page"></div>
    </div>
  );
}

export default Home;
