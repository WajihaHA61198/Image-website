import React, { useRef } from "react";
import { Button } from "./index";

const TeamResume = ({ label, onChange }) => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // do something with the selected file
  };
  return (
    <React.Fragment>
      <div className="bg-white lg:my-32 lg:mt-20 xs:my-12">
        <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-center font-medium xs:mb-5 md:mb-12">
          ATTACH YOUR RESUME
        </h1>

        <div className="lg:grid grid-cols-2 gap-4 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
          {/* 1 */}
          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Given Name(s)<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          {/* 2 */}
          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Family Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          {/* 3 */}
          <div className="mb-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          {/* 4 */}
          <div className="mb-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="telephone"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          {/* 5 */}
          <div className="mb-0 col-span-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Resume/CV{" "}
              <span className="text-red-500 text-xs">
                {" "}
                (Upload either DOC, DOCX, HTML, PDF, or TXT file types (5MB
                max)*
              </span>
            </label>
            <div className="pb-4 bg-white border border-gray-300 text-gray-900 text-sm outline-none w-full p-2.5 flex justify-center">
              <input
                ref={inputRef}
                onChange={handleFileInputChange}
                type="file"
                accept="application/pdf"
                required
                style={{ display: "none" }}
              />

              <button
                onClick={handleButtonClick}
                className="text-xs font-semibold block text-center"
              >
                <i className="far fa-arrow-alt-circle-up text-gray-400 text-xl"></i>{" "}
                <br />
                <span className="text-center">Drop file here</span>
                <br /> or <span className="underline">Select file</span>
              </button>
            </div>
          </div>

          {/* checkbox */}
          <div className="flex items-center mb-4 xs:mt-2 lg:mt-0">
            <input
              type="checkbox"
              value=""
              className="w-3 h-3 text-slate-600 bg-gray-100 border-gray-300 outline-none "
            />
            <label
              for="disabled-checkbox"
              className="ml-2 text-xs font-medium text-gray-400"
            >
              I accept the Privacy Policy.{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
        <div className="col-start-2 grid justify-end contact-btn mb-10 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
          <Button value={"Submit"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamResume;
