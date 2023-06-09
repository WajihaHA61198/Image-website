import React from "react";
import { Social, FooterMenu } from "./index";
import { footerData } from "../data/footerData";
import "../styles/footer.css";

const Footers = () => {
  return (
    // bottom-0
    <footer className="absolute  w-full h-auto pb-8 bg-[#1f1f1f] text-white xs:footerShadow lg:shadow-inner">
      <img
        className="m-auto pt-8 sx:w-[60vw] xl:w-[30%]"
        src="https://cdn.shopify.com/s/files/1/0418/6429/8657/files/image-logo-white.png?v=1593109200"
        alt="image_logo"
      />
      {/* ----------------------------------------- */}
      {/* md:block */}
      <div className="md:grid md:grid-cols-4 md:gap-5 md:ml-16 md:mr-16 lg:grid-cols-5 lg:gap-1 lg:ml-28 lg:mr-28 md:mt-4 sx:hidden">
        {footerData.map(({ title, content }) => (
          <FooterMenu title={title} content={content} />
        ))}
        <div className="lg:block md:hidden">
          <Social />
        </div>
      </div>
      {/* ----------------------------------------- */}
      {/* @-till 768 */}
      <div className="md:hidden ml-12 mr-12 mt-6">
        {footerData.map(({ title, content }) => (
          <FooterMenu title={title} content={content} />
        ))}
      </div>
      <div className="lg:hidden xs:ml-4 xs:mr-4 xs:-mt-8 sg:ml-12 sg:mr-12 flex justify-evenly">
        <Social />
      </div>
      {/* ----------------------------------------- */}
    </footer>
  );
};

export default Footers;
