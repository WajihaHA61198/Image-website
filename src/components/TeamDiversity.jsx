import React from "react";
import diversity1 from "../assets/Mask Group 35.png";
import diversity2 from "../assets/IMG_7505.png";
import diversity3 from "../assets/01.png";
import diversity4 from "../assets/Mask Group 34.png";
import diversity5 from "../assets/Mask Group 33.png";

const TeamDiversity = () => {
  return (
    <React.Fragment>
      <div className="xs:mx-4 xs:my-8 md:mx-10 md:my-10 lg:mx-40 lg:my-28 xs:mb-20">
        <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-center font-medium lg:mb-6 xs:mb-4">
          DIVERSITY AND CULTURE
        </h1>

        {/* <p
          className="text-[#919191] text-center xs:my-5 md:my-8 md:mt-4 xsm:mb-12 md:mx-[5rem] xsm:mx-[12rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p> */}

        <div className="grid md:grid-cols-3 gap-2 mb-2">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity1}
              alt="diversity"
            />
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity2}
              alt="diversity"
            />
          </div>
          {/* 3 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity3}
              alt="diversity"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {/* 4 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity4}
              alt="diversity"
            />
          </div>
          {/* 5 */}
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity5}
              alt="diversity"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamDiversity;
