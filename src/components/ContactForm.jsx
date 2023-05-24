import React, { useState } from "react";
import { Button } from "./index";

const ContactForm = (props) => {
  return (
    <React.Fragment>
      <section className="my-10 mb-20">
        <h1 className="uppercase xs:text-2xl lg:text-5xl font-medium xs:mb-8 lg:mb-12 text-center">
          GET IN TOUCH
        </h1>

        <div className="lg:grid grid-cols-2 gap-4 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
          {/* 1 */}

          <div class="relative  mb-4 col-span-1" data-te-input-wrapper-init>
            <input
              type="text"
              id="floating_outlined"
              className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              First name
            </label>
          </div>

          {/* <div className="relative mb-4 col-span-1" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              placeholder=""
            />
            <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 text-gray-400 transition-all duration-200 ease-out peer-focus:px-[6px] peer-focus:bg-white peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
              First name
            </label>
          </div> */}
          {/* 2 */}
          <div className="relative mb-4 col-span-1" data-te-input-wrapper-init>
            <input
              type="text"
              id="floating_outlined"
              className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Last name
            </label>
          </div>
          {/* 3 */}
          <div className="relative mb-4 col-span-1" data-te-input-wrapper-init>
            <input
              type="email"
              id="floating_outlined"
              className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Email Address<span className="text-red-600">*</span>
            </label>
          </div>
          {/* 4 */}
          <div className="relative mb-4 col-span-1" data-te-input-wrapper-init>
            <input
              type="email"
              id="floating_outlined"
              className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Confirm Email Address<span className="text-red-600">*</span>
            </label>
          </div>
          {/* 5 */}
          <div className="relative mb-4 col-span-2" data-te-input-wrapper-init>
            <input
              type="textArea"
              id="floating_outlined"
              // className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
              className="h-[5rem] peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.32rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-[1.5rem] z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Message
            </label>
          </div>

          <div className="col-start-2 grid justify-end contact-btn">
            <Button value={"Submit"} {...props} buttonId="Contact Form" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactForm;
