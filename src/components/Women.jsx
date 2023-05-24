import React, { useState } from "react";
import D1 from "../assets/women/1.JPG";
import D2 from "../assets/women/2.JPG";
import D3 from "../assets/women/3.JPG";
import D4 from "../assets/women/4.JPG";
import D5 from "../assets/women/5.JPG";
import D6 from "../assets/women/6.JPG";
//
import D7 from "../assets/women/7.JPG";
import D8 from "../assets/women/8.JPG";
import D9 from "../assets/women/9.JPG";
import D10 from "../assets/women/10.JPG";
import D11 from "../assets/women/11.JPG";
import D12 from "../assets/women/12.JPG";
import D13 from "../assets/women/13.JPG";
import D14 from "../assets/women/14.JPG";
import D15 from "../assets/women/15.JPG";
import D16 from "../assets/women/16.JPG";
import D17 from "../assets/women/17.JPG";
import D18 from "../assets/women/18.JPG";
import D19 from "../assets/women/19.JPG";
import D20 from "../assets/women/20.JPG";
import D21 from "../assets/women/21.JPG";
import D22 from "../assets/women/22.JPG";
import D23 from "../assets/women/23.JPG";
import D24 from "../assets/women/24.JPG";
import D25 from "../assets/women/25.JPG";
import D26 from "../assets/women/26.JPG";
import D27 from "../assets/women/27.JPG";
import D28 from "../assets/women/28.JPG";
import D29 from "../assets/women/29.JPG";
import D30 from "../assets/women/30.JPG";

const Women = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    D1,
    D2,
    D3,
    D4,
    D5,
    D6,
    // D7,
    D8,
    D9,
    D10,
    D11,
    D12,
    D13,
    D14,
    D15,
    D16,
    D17,
    D18,
    // D19,
    // D20,
    D21,
    D22,
    D23,
    D24,
    // D25,
    D26,
    D27,
    D28,
    D29,
    D30,
  ];

  const handleImageClick = (src, index) => {
    setModalImageSrc(src);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    console.log("Previous index:", prevIndex);
    setCurrentImageIndex(prevIndex);
    const newImageSrc = images[prevIndex];
    setModalImageSrc(newImageSrc);
  };

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    console.log("Next index:", nextIndex);
    setCurrentImageIndex(nextIndex);
    const newImageSrc = images[nextIndex];
    setModalImageSrc(newImageSrc);
  };

  return (
    <div className="grid xs:grid-cols-2 lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:mx-4 lg:mx-40 my-10">
      {images.map((src, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(src, index)}
          className="cursor-pointer"
        >
          <img src={src} alt="designerRetreat" />
        </div>
      ))}

      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[99999999] flex justify-center items-center"
          // onClick={() => setShowModal(false)}
        >
          <button
            onClick={() => setShowModal(false)}
            className="text-4xl text-white absolute top-8 right-4"
          >
            <i class="fa-solid fa-square-xmark"></i>
          </button>

          <button
            className="absolute top-1/2 left-0 px-4 py-[.7rem] transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-[50%] text-black z-[999999]"
            onClick={handlePrevClick}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div className="relative lg:mx-20 lg:h-[95%]">
            <img src={modalImageSrc} alt="designerRetreat" />
          </div>
          <button
            className="absolute top-1/2 right-0 px-4 py-[.7rem] transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-[50%] text-black z-70"
            onClick={handleNextClick}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Women;
