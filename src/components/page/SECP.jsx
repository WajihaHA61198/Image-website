import React from "react";

const SECP = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:mb-10 lg:mx-40 xsm:mx-80 xs:mb-16">
        <h1 className="md:text-3xl xs:text-xl md:my-8 xs:mb-4 text-black xs:text-center lg:text-left">
          SECP INVESTOR COMPLAINT
        </h1>

        <p className="text-sm">SECP Investor Complaint Link:</p>
        <a
          className="text-sm text-gray-950 hover:underline"
          href="http://www.secp.gov.pk/complaintForm1.asp"
          target="_blank"
          rel="noreferrer"
        >
          http://www.secp.gov.pk/complaintForm1.asp
        </a>
      </div>
    </React.Fragment>
  );
};

export default SECP;
