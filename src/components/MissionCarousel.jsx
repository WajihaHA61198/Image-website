import React from "react";
import Flickity from "react-flickity-component";
import vision from "../assets/Vision.png";
import mission from "../assets/Mission.png";
import coreValue from "../assets/Core Value.png";
import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true
};

const MissionCarousel = () => {
  return (
    <div className="mx-6 mt-4 mb-6">
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
        groupCells={2}
      >
        {/* @1 */}
        <div>
          <div className="border border-[#707070] h-auto grid">
            <div className="bg-[#D9D9D9] w-full xs:h-[67%] ssx:h-[60%] border border-b-[#707070]">
              <img
                className="w-full xs:px-6 xs:pt-6 ssx:px-8 ssx:pt-8 xs:h-[141%] ssx:h-[154%]"
                src={vision}
                alt="vision"
              />
            </div>
            <div className="text-center h-1/2 mx-6">
              <div className="relative xs:-top-[35%] ssx:-top-[57%]">
                <h1 className="font-medium xs:text-2xl sg:text-[1.8rem]">
                  Vision
                </h1>
                <p className="text-center font-medium xs:text-sm ss:text-base">
                  Image Pakistan is committed to strive for excellence in all
                  areas of its activity.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* @2 */}
        <div>
          <div className="border border-[#707070] h-auto grid">
            <div className="bg-[#D9D9D9] w-full xs:h-[67%] ssx:h-[60%] border border-b-[#707070]">
              <img
                className="w-full xs:px-6 xs:pt-6 ssx:px-8 ssx:pt-8 xs:h-[141%] ssx:h-[154%]"
                src={mission}
                alt="mission"
              />
            </div>
            <div className="text-center h-1/2 mx-6">
              <div className="relative xs:-top-[35%] ssx:-top-[54%]">
                <h1 className="font-medium xs:text-2xl sg:text-[1.8rem]">
                  Mission
                </h1>
                <p className="text-center font-medium xs:text-sm ss:text-base">
                  Providing quality product that promote commerce and industry
                  with an objective of contributing to the nation’s prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* @3 */}
        <div>
          <div className="border border-[#707070] h-auto grid">
            <div className="bg-[#D9D9D9] w-full xs:h-[67%] ssx:h-[60%] border border-b-[#707070]">
              <img
                className="w-full xs:px-6 xs:pt-6 ssx:px-8 ssx:pt-8 xs:h-[141%] ssx:h-[154%]"
                src={coreValue}
                alt="CoreValue"
              />
            </div>
            <div className="text-center h-1/2 mx-6">
              <div className="relative xs:-top-[35%] ssx:-top-[57%]">
                <h1 className="font-medium xs:text-2xl sg:text-[1.8rem]">
                  Core Values
                </h1>
                <p className="text-center font-medium xs:text-sm ss:text-base">
                  We Believe in 3C’s: Commitment, Competence & Consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default MissionCarousel;
