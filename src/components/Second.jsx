import React, { useState, useContext } from "react";
// import AppContext from '../context';
import { useNavigate } from "react-router-dom";
import { Button } from "./index";
import journey from "../assets/Our Journey.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Second = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="flex justify-end">
        <h1 className="bg-black text-white uppercase p-2 xs:block lg:hidden text-xl ml-7 w-[80%]">
          Our Journey
        </h1>
      </div>
      <section className="grid lg:grid-cols-5 xs:grid-cols-1 h-auto xs:px-4 lg:px-0 lg:mx-0">
        {/* 1 */}
        <div
          className="order-1 col-span-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="800"
          // data-aos-easing="ease-in-sine"
        >
          <img src={journey} alt="journey" />
        </div>
        {/* 2 */}
        <div className="lg:absolute right-0 lg:left-[34rem] xl:left-[45rem] xm:left-[46rem] xll:left-[51rem] x2l:left-[55rem] order-2 col-span-2 lg:mt-12 xl:mt-28">
          <h1 className="bg-black text-white uppercase lg:text-3xl xl:text-[2rem] p-5 xs:hidden lg:block">
            Our Journey
          </h1>
          {/* xll:-left-[8rem] */}
          <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 relative lg:-left-[5rem]  lg:w-[100%] x2l:p-12 x2l:px-[3.5rem] xs:-top-4 xs:mx-4 lg:top-0 lg:mx-0 xll:left-[0%]">
            {/* <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 lg:w-[107%] x2l:p-12 x2l:px-[3.5rem]"> */}
            <p className="text-[#454343] lg:text-sm mb-4 font-medium xs:text-[.8rem]">
              Image capitalized on the changing retail landscape of Pakistan and
              built stores across major cities in Pakistan that provide superior
              products both in terms of quality and design, with the value
              addition of selling ’Designer Clothing’ at affordable prices.
            </p>
            <Button
              {...props}
              buttonId="Our Journey"
              value={"Read More"}
              onClick={() => navigate("/our-journey")}
            />
          </div>
        </div>
        {/* </div> */}
      </section>
    </React.Fragment>
  );
};

export default Second;
