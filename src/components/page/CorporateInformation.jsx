import React from "react";

const CorporateInformation = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mb-12 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-80">
        <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black xs:text-center lg:text-left">
          CORPORATE INFORMATION
        </h1>

        <h6 className="text-black font-semibold mb-2">
          Registered Office & Plant:
        </h6>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2">
          <i className="fa fa-address-card"></i>
          <span>
            <strong>Address:</strong> F/538, S.I.T.E., Karachi-75700
          </span>
        </p>

        <h6 className="text-black font-semibold my-2 mt-8">Head Office:</h6>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa fa-address-card"></i>
          <span>
            <strong>Address:</strong> A/33, Central Commercial Area, Block 7/8,
            Shahrah-e-Faisal, KCHSU, Karachi-75350
          </span>
        </p>
        <p
          type="tel"
          className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2"
        >
          <i className="fa fa-phone"></i>
          <span>
            <strong>Phone No:</strong> 021-32582613, 34370471
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa fa-fax"></i>
          <span>
            <strong>Fax No:</strong> 021-32562132
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa fa-envelope"></i>
          <span>
            <strong>Email:</strong> info@image.net.pk
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa-solid fa-pen-to-square"></i>
          <span>
            <strong>Company Registration Number: </strong>
            0022754
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa-solid fa-percent"></i>
          <span>
            <strong>NTN: </strong>
            0698443-6
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="fa-sharp fa-solid fa-building-columns"></i>
          <span>
            <strong>Bankers: </strong>
            Al Baraka Bank (Pakistan) Ltd. Bank AL-Habib Ltd. Habib Bank Ltd.
          </span>
        </p>
        <p className="text-sm flex items-center xs:gap-4 lg:gap-2 py-2">
          <i className="	fa fa-line-chart"></i>
          <span>
            <strong>PSX Trading Symbol: </strong>
            IMAGE
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default CorporateInformation;
