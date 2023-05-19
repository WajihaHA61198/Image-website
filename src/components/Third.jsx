import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, MissionCarousel } from "./index";
import vision from "../assets/Vision.png";
import mission from "../assets/Mission.png";
import coreValue from "../assets/Core Value.png";

const Third = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="text-[#737373] lg:mx-16 lg:my-16 xs:my-4">
        {/* 1 */}
        <div>
          <p className="font-medium lg:text-lg xs:text-sm flex justify-center mb-4 text-center xs:mx-8 lg:mx-0">
            With a belief in honouring individuality, fashion and uniqueness, we
            strive to cultivate a culture of innovation.
          </p>
          <div className="flex justify-center">
            <Button
              {...props}
              buttonId="About us"
              value={"View Our Story"}
              onClick={() => navigate("/about-us")}
            />
          </div>
        </div>
        {/* ------------------------ */}
        {/* 2 */}
        <div className="md:flex  md:justify-center mt-8 sx:hidden lg:gap-16 sf:grid sf:grid-cols-2">
          {/* @1 */}
          <div className="border border-[#707070] h-auto md:w-[25%] xs:w-full    sf:col-span-1 sf:mx-2 sf:w-auto  lg:mx-0 md:mx-6 imageZoom">
            <div className="bg-[#D9D9D9] w-full h-1/2 border border-b-[#707070]">
              <img
                className=" w-full xsm:px-8 xsm:pt-8 lg:px-6 lg:pt-6 xm:h-[134%] xsm:h-[140%] lg:h-[122%]   sf:px-4 sf:pt-4 smm:px-8 smm:pt-8 smm:h-[140%] md:px-4 md:pt-4 md:h-[130%]    "
                src={vision}
                alt="vision"
              />
            </div>
            <div className="text-center xm:mx-10 lg:mx-2 h-1/2   sf:mx-3">
              <div className="relative xm:top-[47%] lg:top-[26%] sf:top-[35%] se:top-[40%] sh:top-[43%] sw:top-[48%] md:top-[33%]">
                <h1 className="xll:text-2xl lg:text-2xl font-medium sf:text-2xl">
                  Vision
                </h1>
                <p className="text-center font-normal lg:text-sm xll:text-sm md:text-[13px]">
                  Image is committed to strive for excellence in all
                  areas of its activity.
                </p>
              </div>
            </div>
          </div>
          {/* @2 */}
          <div className="border border-[#707070] h-auto md:w-[25%] xs:w-full    sf:col-span-1 sf:mx-2 sf:w-auto lg:mx-0 md:mx-6 imageZoom">
            <div className="bg-[#D9D9D9] w-full h-1/2 border border-b-[#707070]">
              <img
                className=" w-full xsm:px-8 xsm:pt-8 lg:px-6 lg:pt-6 xm:h-[134%] xsm:h-[140%] lg:h-[122%]   sf:px-4 sf:pt-4 smm:px-8 smm:pt-8 smm:h-[140%] md:px-4 md:pt-4 md:h-[130%]"
                src={mission}
                alt="mission"
              />
            </div>
            <div className="text-center xm:mx-10 lg:mx-2 h-1/2   sf:mx-3">
              <div className="relative xm:top-[47%] lg:top-[26%]  sf:top-[35%] se:top-[40%] sh:top-[43%] sw:top-[48%] md:top-[33%]">
                <h1 className="xll:text-2xl lg:text-2xl font-medium sf:text-2xl">
                  Mission
                </h1>
                <p className="text-center font-normal lg:text-sm xll:text-sm md:text-[13px]">
                  Providing quality product that promote commerce and industry
                  with an objective of contributing to the nation’s prosperity.
                </p>
              </div>
            </div>
          </div>
          {/* @3 */}
          <div className="border border-[#707070] h-auto md:w-[25%] xs:w-full sf:col-span-2   sf:mx-32 sw:mx-44 sf:w-auto  lg:mx-0  sf:mt-4  md:mt-0 md:col-span-1 md:mx-6 imageZoom">
            <div className="bg-[#D9D9D9] w-full h-1/2 border border-b-[#707070]">
              <img
                className=" w-full xsm:px-8 xsm:pt-8 lg:px-6 lg:pt-6 xm:h-[134%] xsm:h-[140%] lg:h-[122%]   sf:px-4 sf:pt-4 sf:h-[145%] smm:px-8 smm:pt-8 md:px-4 md:pt-4 md:h-[130%]"
                src={coreValue}
                alt="CoreValue"
              />
            </div>
            <div className="text-center xm:mx-10 lg:mx-2 h-1/2   sf:mx-3">
              <div className="relative xm:top-[47%] lg:top-[26%] sf:top-[50%] md:top-[33%]">
                <h1 className="xll:text-2xl lg:text-xl font-medium sf:text-2xl">
                  Core Values
                </h1>
                <p className="text-center font-normal lg:text-sm xll:text-sm md:text-[13px]">
                  We Believe in 3C’s: Commitment, Competence & Consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="sf:hidden sx:block ">
          <MissionCarousel />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Third;
