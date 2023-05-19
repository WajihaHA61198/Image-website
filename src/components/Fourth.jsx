import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./index";
import life from "../assets/Life at Image.png";

const Fourth = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="mb-8 xs:mb-10">
        <section className="xs:flex xs:flex-col-reverse lg:grid lg:grid-cols-5 xs:grid-cols-1 h-auto lg:mx-0 relative">
          {/* 1 */}
          <div className="col-span-2 order-1 lg:mt-12 xl:mt-20">
            {/* ------------------------------ */}
            {/* @-for desktop */}
            <div className="absolute lg:left-0 lg:right-[50%] xl:right-[57%] lg:block xs:hidden">
              <h1 className="bg-black text-white uppercase lg:text-3xl xl:text-[2rem] lg:p-5 xs:p-2 xs:text-xl lg:block pl-8 xs:w-[99%]">
                Life at image
              </h1>

              <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 lg:w-[107%] x2l:p-12 x2l:px-[3.5rem] ">
                <p className="text-[#454343] lg:text-sm mb-4 font-medium xs:text-[.8rem]">
                  Join our family of enthusiasts where individuals are polished
                  to have a promising growth and excellence in their future
                  endeavors.
                </p>
                <Button
                  {...props}
                  buttonId="Our Team"
                  value={"View Careers"}
                  onClick={() => navigate("/our-team")}
                />
              </div>
            </div>

            {/* ------------------------------ */}
            {/* for mobile */}
            {/* xs:top-[45.5rem] sg:top-[47.5rem] ss:top-[50.5rem] sf:top-[55.5rem] sm:top-[61.5rem] smm:top-[64.5rem] md:top[68.5rem] ep:top-[74.5rem] np:top-[80.5rem] */}
            <div className="absolute lg:left-0 lg:right-[57%] xs:block lg:hidden xs:top-[84%]">
              <h1 className="bg-black text-white uppercase lg:text-5xl xl:text-6xl lg:p-6 xs:p-2 xs:text-xl lg:block pl-8 xs:w-3/4">
                Life at image
              </h1>
              <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 w-[89%] x2l:p-12 x2l:px-[3.5rem] ">
                <p className="text-[#454343] lg:text-base mb-4 font-medium xs:text-[.8rem]">
                  Join our family of enthusiasts where individuals are polished
                  to have a promising growth and excellence in their future
                  endeavors.
                </p>
                <Button
                  {...props}
                  buttonId="Our Journey"
                  value={"View Careers"}
                  onClick={() => navigate("/our-team")}
                />
              </div>
            </div>
            {/* ------------------------------ */}
          </div>
          {/* 2 */}
          <div className="col-span-3 order-2 xs:p-4 lg:px-0 xs:pb-0">
            <img src={life} alt="life_at_image" />
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Fourth;
