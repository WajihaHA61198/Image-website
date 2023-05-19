import React from "react";
import aboutpic from "../assets/about-pic.png";
import "../styles/About.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="lg:grid grid-cols-5">
        {/* 1 */}
        <div
          className="lg:col-span-3 lg:mx-16 lg:my-20"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <img src={aboutpic} alt="ImageAbout" />
        </div>
        {/* 2 */}
        <div className="lg:col-span-2 justify-center text-[#919191] flex flex-col items-start lg:mr-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
          <h1 className="uppercase text-3xl mb-6">About Image</h1>
          <p className="">
            Established in 1993, Image is a leading high-street fashion brand.
            Popularly known as Image in the fashion & retail landscape,
            specialises in Schiffli embroidery in Pakistan, and embodies a
            distinctive aesthetic that blends heritage and innovation for the
            minimalist woman. It is celebrated for being the first retail brand
            to give Chikankari ensembles as a Ready-to-Wear offering.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
