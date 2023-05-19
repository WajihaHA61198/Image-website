import React from "react";
import { Link } from "react-router-dom";
import { GmailForm } from "../index"

const PageNotFound = () => {
  return (
    <React.Fragment>
      {/* <div className="flex flex-col items-center xs:my-10 md:my-20 text-[#4a4a4a]">
        <h1 className="text-6xl mb-6 font-[TiroTamil]">404</h1>
        <p className="mb-4 text-sm">
          SORRY! PAGE YOU ARE LOOKING CAN’T BE FOUND.
        </p>
        <p>
          Go back to the{" "}
          <Link to="/" className="underline hover:text-black font-semibold">
            homepage
          </Link>
        </p>
      </div> */}
      <GmailForm />
    </React.Fragment>
  );
};

export default PageNotFound;
