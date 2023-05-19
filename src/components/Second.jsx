import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./index";
import journey from "../assets/Our Journey.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Second = () => {
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
          data-aos-offset="500"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <img src={journey} alt="journey" />
        </div>
        {/* 2 */}
        <div className="lg:absolute right-0 lg:left-[34rem] xl:left-[45rem] xm:left-[46rem] xll:left-[51rem] x2l:left-[55rem] order-2 col-span-2 lg:mt-12 xl:mt-20">
          <h1 className="bg-black text-white uppercase lg:text-5xl xl:text-5xl p-6 xs:hidden lg:block">
            Our Journey
          </h1>
          <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 relative lg:-left-[5rem] xll:-left-[8rem] lg:w-[96%] x2l:p-12 x2l:px-[3.5rem] xs:-top-4 xs:mx-4 lg:top-0 lg:mx-0">
            <p className="text-[#454343] lg:text-base mb-4 font-medium xs:text-[.9rem]">
              Image is a high-quality fashion brand that aims on changing the
              retail landscape of Pakistan. With its presence nationwide, Image
              provides top-notched value added superior "Design Clothing"
              products...
            </p>
            <Button
              value={"Read More"}
              onClick={() => navigate("/our-journey")}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Second;
