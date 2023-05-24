import React, { useState } from "react";
import D1 from "../assets/designers Retreat/1.jpg";
import D2 from "../assets/designers Retreat/2.jpg";
import D3 from "../assets/designers Retreat/3.jpg";
import D4 from "../assets/designers Retreat/4.jpg";
import D5 from "../assets/designers Retreat/5.jpg";
import D6 from "../assets/designers Retreat/6.jpeg";
//
import D7 from "../assets/designers Retreat/7.jpg";
import D8 from "../assets/designers Retreat/8.jpg";
import D9 from "../assets/designers Retreat/9.jpg";
import D10 from "../assets/designers Retreat/10.jpg";
//
import D11 from "../assets/designers Retreat/11.jpg";
import D12 from "../assets/designers Retreat/12.jpg";
import D13 from "../assets/designers Retreat/13.jpg";
import D14 from "../assets/designers Retreat/14.jpg";
import D15 from "../assets/designers Retreat/15.jpg";
import D16 from "../assets/designers Retreat/16.jpg";
import D17 from "../assets/designers Retreat/17.jpg";
import D18 from "../assets/designers Retreat/18.jpg";
import D19 from "../assets/designers Retreat/19.jpg";
import D20 from "../assets/designers Retreat/20.jpg";
import D21 from "../assets/designers Retreat/21.jpg";
import D22 from "../assets/designers Retreat/22.jpg";
import D23 from "../assets/designers Retreat/23.jpg";
import D24 from "../assets/designers Retreat/24.jpg";
import D25 from "../assets/designers Retreat/25.jpg";
import D26 from "../assets/designers Retreat/26.jpeg";
import D27 from "../assets/designers Retreat/27.JPG";
import D28 from "../assets/designers Retreat/28.jpg";
import D29 from "../assets/designers Retreat/29.jpg";
import D30 from "../assets/designers Retreat/30.jpg";
import D31 from "../assets/designers Retreat/31.jpg";
//
import D32 from "../assets/designers Retreat/32.jpg";
import D33 from "../assets/designers Retreat/33.jpg";
import D34 from "../assets/designers Retreat/34.jpg";
import D35 from "../assets/designers Retreat/35.jpg";
import D36 from "../assets/designers Retreat/36.jpg";
import D37 from "../assets/designers Retreat/37.jpg";
//
import D38 from "../assets/designers Retreat/38.JPG";
import D39 from "../assets/designers Retreat/39.jpg";
import D40 from "../assets/designers Retreat/40.jpg";
import D41 from "../assets/designers Retreat/41.jpg";
import D42 from "../assets/designers Retreat/42.jpg";
import D43 from "../assets/designers Retreat/43.jpg";
import D44 from "../assets/designers Retreat/44.jpg";

const Design = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    D1,
    D2,
    // D3,
    D4,
    D5,
    D6,
    D8,
    // D9,
    // D10,
    // D11,
    // D12,
    D13,
    D14,
    // D15,
    D16,
    D17,
    // D18,
    D19,
    // D20,
    D21,
    D22,
    D23,
    D24,
    D25,
    D26,
    D7,
    D28,
    // D29,
    // D30,
    D31,
    D32,
    // D33,
    D35,
    // D36,
    // D37,

    D27,
    D39,
    D40,
    // D41,
    // D42,
    D43,
    D44,

    D38,
    D34,
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
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[99999999] flex justify-center items-center"
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

export default Design;
