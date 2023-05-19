import React from "react";
import imageContact from "../assets/IMG_6146.png";

const ContactUs = () => {
  return (
    <React.Fragment>
      <section className="lg:h-[80vh] lg:grid grid-cols-2 relative xs:flex flex-col-reverse">
        {/* 1 */}
        <div className="lg:bg-[#EBEBEB] flex flex-col justify-center lg:px-16 xll:px-32 xs:m-8 lg:m-0">
          <h1 className="uppercase xs:text-xl lg:text-3xl xl:text-5xl xs:font-semibold lg:font-medium mb-2">
            Contact Us
          </h1>
          <p className="text-[#737373] font-medium mb-7 xs:text-sm">
            Have a question or query? We’d love to hear from you. Here’s how you
            can contact us:
          </p>

          {/* @--Registered Office: */}
          <div className="flex items-baseline gap-4 lg:w-[63%] xs:mb-3 md:mb-6">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <div>
              <h6 className="font-semibold mb-1">Registered Office:</h6>
              <p className="xs:text-xs md:text-sm text-[#737373]">
                <strong className="text-black">Address:</strong> F/538,
                S.I.T.E., Karachi-75700 <br />{" "}
              </p>
            </div>
          </div>
          {/* @--office */}
          <div className="flex items-baseline gap-4 xs:mb-3 md:mb-6 lg:w-[63%]">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <div>
              <h6 className="font-semibold mb-1">Head Office</h6>
              <p className="xs:text-xs md:text-sm text-[#737373]">
                <strong className="text-black">Address:</strong> A/33, Central
                Commercial Area, Block 7/8, Shahrah-e-Faisal, KCHSU,
                Karachi-75350 <br />{" "}
                <strong className="text-black">Phone:</strong> 021-32582613,
                34370471
                <br />
                <strong className="text-black">Fax No:</strong> 021-32562132
                <br />
                <strong className="text-black">Email:</strong>{" "}
                <a href="mailto:info@image.net.pk">info@image.net.pk</a>
              </p>
            </div>
          </div>
          {/* @--Factory
          <div className="flex items-baseline gap-4 lg:w-[63%]">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <div>
              <h6 className="font-semibold mb-1">Factory</h6>
              <p className="xs:text-xs md:text-sm text-[#737373]">
                <strong className="text-black">Address:</strong> F/538,
                S.I.T.E., Karachi <br />{" "}
                <strong className="text-black">Phone:</strong> 021-32582613
              </p>
            </div>
          </div> */}
        </div>
        {/* 2 */}
        <div
          className="lg:absolute right-0 top-12 left-[45%]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <img className="lg:w-[90%]" src={imageContact} alt="contactphoto" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
