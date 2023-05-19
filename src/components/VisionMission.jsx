import React from "react";
import vision from "../assets/Vision.png";
import mission from "../assets/Mission.png";

const VisionMission = () => {
  return (
    <React.Fragment>
      <div className="xs:mx-2 xll:mx-60 my-8 lg:mb-20">
        {/* 1 */}
        <div className="lg:grid grid-cols-2 xs:flex flex-col-reverse">
          <div className="flex flex-col lg:justify-center text-[#919191] items-start lg:ml-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
            <h1 className="uppercase text-3xl mb-6 text-black">Vision</h1>
            <p>
              Image is committed to strive for excellence in all areas
              of its activity.
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img src={vision} alt="vision" />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 xs:mt-4 lg:mt-10 xs:flex flex-col">
          <div className="flex justify-center" data-aos="fade-right">
            <img src={mission} alt="mission" />
          </div>
          <div className="flex flex-col justify-center text-[#919191] items-start lg:mr-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
            <h1 className="uppercase text-3xl mb-6 text-black">Mission</h1>
            <p>
              Providing quality product that promote commerce and industry with
              an objective of contributing to the nation’s prosperity.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VisionMission;
