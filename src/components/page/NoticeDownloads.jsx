import React from "react";

const NoticeDownloads = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mb-16 xs:mx-4 lg:mb-12 lg:mx-40 xsm:mx-80">
        <h1 className="md:text-3xl xs:text-xl md:my-8 xs:mb-4 text-black xs:text-center lg:text-left">
          NOTICES & OTHER DOWNLOADS
        </h1>

        <p className="font-medium mb-3">
          Notice for credit of unpaid Right into CDS of CDC account holder{" "}
          <br />
          <a
            className="text-black text-xs hover:underline font-semibold"
            href="https://cdn.shopify.com/s/files/1/0689/7349/4550/files/CDC.pdf?v=1683564761"
          >
            Click Here
          </a>
        </p>
        <p className="font-medium mb-3">
          Notice of Annual General Meeting (AGM) 2017 <br />
          <a
            className="text-black text-xs hover:underline font-semibold"
            href="https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM.pdf?v=1683564804"
          >
            Click Here
          </a>
        </p>
        <p className="font-medium mb-3">
          Notice of Annual General Meeting (AGM) 2016 <br />
          <a
            className="text-black text-xs hover:underline font-semibold"
            href="https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM16.pdf?v=1683564842"
          >
            Click Here
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default NoticeDownloads;
