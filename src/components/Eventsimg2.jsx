import React from "react";
import DesignerRetreat from "../assets/Rectangle 106.png";
import MothersDay from "../assets/Rectangle 112.png";
import Matrix from "../assets/Mask Group 37.png";
import BreastCancer from "../assets/Rectangle 109.png";
import Independence from "../assets/Rectangle 111.png";

const Eventsimg2 = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="xs:text-xl md:text-3xl lg:text-5xl text-center md:mb-10 md:mt-10 xs:mb-5 font-medium">
          EVENTS & MEDIA
        </h1>

        {/*  */}
        <div className="sm:grid grid-cols-2 xs:mx-[1rem] md:mx-[5rem] lg:mx-[12rem] xm:mx-[15rem] xs:gap-2 md:gap-5 grid-rows-3 mb-10">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat row-span-1 xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <img
                className="w-full"
                src={DesignerRetreat}
                alt="designer_retreat"
              />
              {/* bg-black bg-opacity-60*/}
              <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                  Designer’s Retreat
                </p>
                <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat row-span-1 xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <img className="w-full" src={MothersDay} alt="mothers_day" />

              <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                  Woman’s Day
                </p>
                <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="row-span-2 relative overflow-hidden bg-cover bg-no-repeat h-[67%] xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <img className="w-full" src={Matrix} alt="matrix" />
              {/* h-full */}
              <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                  Matrix Fit
                </p>
                <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <img className="w-full" src={BreastCancer} alt="breast_cancer" />
              <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                  Breast Cancer <br /> Awareness Seminar
                </p>
                <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="row-span-2 relative overflow-hidden bg-cover bg-no-repeat xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <img
                className="w-full h-full"
                src={Independence}
                alt="independence_day"
              />
              <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                  Independence Day
                </p>
                <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------- */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Eventsimg2;
