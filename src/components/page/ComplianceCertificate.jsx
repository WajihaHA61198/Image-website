import React from "react";
import { Certificate } from "../index"

const ComplianceCertificate = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-80">
        <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black xs:text-center lg:text-left">
          COMPLIANCE CERTIFICATE
        </h1>

        <Certificate />
      </div>
    </React.Fragment>
  );
};

export default ComplianceCertificate;
