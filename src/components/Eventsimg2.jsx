import React from "react";
import DesignerRetreat from "../assets/Rectangle 106.png";
import MothersDay from "../assets/Rectangle 112.png";
//
import Matrix2 from "../assets/matrix2.0.jpg";
import Ind2 from "../assets/independence2.0.jpg";
import Cancer2 from "../assets/Cancer awareness2.0.jpg";
//
import { Link } from "react-router-dom";

const Eventsimg2 = () => {
  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <div>
        <h1 className="xs:text-xl md:text-3xl lg:text-5xl text-center md:mb-10 md:mt-10 xs:mb-5 font-medium">
          EVENTS & MEDIA
        </h1>

        {/*  */}
        {/* grid-rows-3  */}
        <div className="sm:grid grid-cols-2 xs:mx-[1rem] md:mx-[5rem] lg:mx-[12rem] xm:mx-[15rem] xs:gap-2 md:gap-5 mb-10">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat row-span-1 xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <Link
                to="/events-media/Designer-Retreat"
                onClick={handleClickNav}
              >
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
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat row-span-1 xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <Link to="/events-media/women-day" onClick={handleClickNav}>
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
              </Link>
            </div>
          </div>
          {/* 3 */}
          {/* row-span-2 h-[67%]   */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <Link to="/events-media/matrix-fit" onClick={handleClickNav}>
                <img
                  className="w-full"
                  // src={Matrix}
                  src={Matrix2}
                  alt="matrix"
                />
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
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <Link to="/events-media/breast-cancer" onClick={handleClickNav}>
                <img
                  className="w-full"
                  // src={BreastCancer}
                  src={Cancer2}
                  alt="breast_cancer"
                />
                <div className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ease-in-out hover:opacity-100 bgParent"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-in-out hover:scale-110">
                  <p className="text-white text-center xs:text-2xl xm:text-3xl mb-2 child2">
                    Breast Cancer <br /> Awareness Seminar
                  </p>
                  <button className="child text-white md:text-xs xs:text-[10px] hover-underline-animation">
                    View More
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* 5 */}
          {/* row-span-2 */}
          <div className="col-span-2 relative overflow-hidden bg-cover bg-no-repeat xs:my-2 md:my-0">
            <div className="w-full h-full transition duration-1000 ease-in-out hover:scale-110 parent cursor-pointer">
              <Link
                to="/events-media/independence-day"
                onClick={handleClickNav}
              >
                <img
                  className="w-full h-full"
                  // src={Independence}
                  src={Ind2}
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
              </Link>
            </div>
          </div>
          {/* --------------------------- */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Eventsimg2;
