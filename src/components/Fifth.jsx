import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./index";
import InTouch1 from "../assets/Get In Touch-1.png";
import InTouch2 from "../assets/Get In Touch-2.png";
import InTouch3 from "../assets/Get In Touch-3.png";

const Fifth = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="grid xs:grid-cols-1 lg:grid-cols-5 my-8 xs:mt-48 lg:mt-20 xm:mt-8">
        {/* 1 */}
        <div className="col-span-3">
          <h1 className="bg-black text-white uppercase lg:text-5xl xl:text-5xl lg:p-6 xs:p-2 xs:text-xl lg:flex pl-8 flex justify-end xs:my-2 lg:my-4 xs:mr-8 lg:mr-0">
            GET IN TOUCH
          </h1>

          <div className="grid grid-rows-2 grid-flow-col lg:gap-4 xs:gap-1 lg:ml-3 xs:mx-2 lg:mx-0">
            <div className="row-span-2">
              <img src={InTouch1} alt="InTouch1" />
            </div>
            <div className="row-span-1 ">
              <img className="h-full" src={InTouch2} alt="InTouch2" />
            </div>
            <div className="row-span-1 ">
              <img className="h-full" src={InTouch3} alt="InTouch3" />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="col-span-2 flex flex-col justify-center lg:ml-8 xs:m-2">
          <div className="bg-[#EBEBEB] xs:p-4 lg:p-12 xm:p-16 xm:px-20 xl:p-12 w-[89%] x2l:p-12 x2l:px-[3.5rem] ">
            <p className="text-[#454343] lg:text-base mb-4 font-medium xs:text-[.9rem]">
              For any queries regarding investment or collaborations, click the
              link below to get in touch with us.
            </p>
            <Button
              value={"Contact Us"}
              onClick={() => navigate("/get-in-touch")}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Fifth;
