import React from "react";
import { FinancialReports } from "../index";

const FinancialStatement = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-60">
        <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black xs:text-center lg:text-left">
          FINANCIAL STATEMENTS
        </h1>

        <FinancialReports />
      </div>
    </React.Fragment>
  );
};

export default FinancialStatement;
