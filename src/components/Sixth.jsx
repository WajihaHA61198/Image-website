import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Seventh } from "./index";
import Events1 from "../assets/Events at Image-1.png";
import Events2 from "../assets/Events at Image-2.png";
import Events3 from "../assets/Events at Image-3.png";
import Events4 from "../assets/Events at Image-4.png";

const Sixth = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex justify-end xs:my-2 lg:my-4">
        <h1 className="bg-black text-white uppercase lg:text-3xl xl:text-[2rem] xs:text-xl lg:p-5 xs:p-2 lg:block lg:w-3/5 xs:w-[75%]">
          EVENTS AT IMAGE
        </h1>
      </div>
      <div className="grid xs:grid-cols-2 sf:grid-cols-4 xs:gap-2 lg:gap-8 sf:gap-2 lg:mx-16 xs:mx-2 sf:grid xs:hidden">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <Link to="/events-media/women-day">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={Events1}
              alt="Events1"
            />
          </Link>
        </div>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <Link to="/events-media/Designer-Retreat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={Events2}
              alt="Events2"
            />
          </Link>
        </div>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <Link to="/events-media/breast-cancer">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={Events3}
              alt="Events3"
            />
          </Link>
        </div>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <Link to="/events-media/independence-day">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={Events4}
              alt="Events4"
            />
          </Link>
        </div>
      </div>

      <div className="sf:hidden xs:grid mx-2">
        <Seventh />
      </div>
      {/* */}
      <div className="flex justify-center my-8 mb-16">
        <Button
          value={"View Events & Media"}
          onClick={() => navigate("/events-media")}
          {...props}
          buttonId="Events & Media"
        />
      </div>
    </React.Fragment>
  );
};

export default Sixth;
