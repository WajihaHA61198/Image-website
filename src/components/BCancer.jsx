import React, { useState } from "react";
import D1 from "../assets/cancer/70 (1).jpg";
import D2 from "../assets/cancer/70 (2).jpg";
import D3 from "../assets/cancer/70 (3).jpg";
import D4 from "../assets/cancer/70 (4).jpg";
import D5 from "../assets/cancer/70 (5).jpg";
import D6 from "../assets/cancer/70 (6).jpg";

import D7 from "../assets/cancer/70 (7).jpg";
import D8 from "../assets/cancer/70 (8).jpg";
import D9 from "../assets/cancer/70 (9).jpg";
import D10 from "../assets/cancer/70 (10).jpg";
import D11 from "../assets/cancer/70 (11).jpg";
import D12 from "../assets/cancer/70 (12).jpg";
import D13 from "../assets/cancer/70 (13).jpg";
import D14 from "../assets/cancer/70 (14).jpg";
import D15 from "../assets/cancer/70 (15).jpg";
import D16 from "../assets/cancer/70 (16).jpg";
import D17 from "../assets/cancer/70 (17).jpg";
import D18 from "../assets/cancer/70 (18).jpg";
import D19 from "../assets/cancer/70 (19).jpg";
import D20 from "../assets/cancer/70 (20).jpg";

import D21 from "../assets/cancer/70 (21).jpg";
import D22 from "../assets/cancer/70 (22).jpg";
import D23 from "../assets/cancer/70 (23).jpg";
import D24 from "../assets/cancer/70 (24).jpg";
import D25 from "../assets/cancer/70 (25).jpg";
import D26 from "../assets/cancer/70 (26).jpg";
import D27 from "../assets/cancer/70 (27).jpg";
import D28 from "../assets/cancer/70 (28).jpg";
import D29 from "../assets/cancer/70 (29).jpg";
import D30 from "../assets/cancer/70 (30).jpg";
import D31 from "../assets/cancer/70 (31).jpg";
import D32 from "../assets/cancer/70 (32).jpg";
import D33 from "../assets/cancer/70 (33).jpg";
import D34 from "../assets/cancer/70 (34).jpg";
import D35 from "../assets/cancer/70 (35).jpg";
import D36 from "../assets/cancer/70 (36).jpg";
import D37 from "../assets/cancer/70 (37).jpg";
import D38 from "../assets/cancer/70 (38).jpg";
import D39 from "../assets/cancer/70 (39).jpg";
import D40 from "../assets/cancer/70 (40).jpg";
import D41 from "../assets/cancer/70 (41).jpg";
import D42 from "../assets/cancer/70 (42).jpg";
import D43 from "../assets/cancer/70 (43).jpg";
import D44 from "../assets/cancer/70 (44).jpg";
import D45 from "../assets/cancer/70 (45).jpg";
import D46 from "../assets/cancer/70 (46).jpg";
import D47 from "../assets/cancer/70 (47).jpg";
import D48 from "../assets/cancer/70 (48).jpg";
import D49 from "../assets/cancer/70 (49).jpg";
import D50 from "../assets/cancer/70 (50).jpg";
import D51 from "../assets/cancer/70 (51).jpg";
import D52 from "../assets/cancer/70 (52).jpg";
import D53 from "../assets/cancer/70 (53).jpg";
import D54 from "../assets/cancer/70 (54).jpg";
import D55 from "../assets/cancer/70 (55).jpg";
import D56 from "../assets/cancer/70 (56).jpg";
import D57 from "../assets/cancer/70 (57).jpg";
import D58 from "../assets/cancer/70 (58).jpg";
import D59 from "../assets/cancer/70 (59).jpg";
import D60 from "../assets/cancer/70 (60).jpg";
import D61 from "../assets/cancer/70 (61).jpg";
import D62 from "../assets/cancer/70 (62).jpg";
import D63 from "../assets/cancer/70 (63).jpg";
import D64 from "../assets/cancer/70 (64).jpg";
import D65 from "../assets/cancer/70 (65).jpg";
import D66 from "../assets/cancer/70 (66).jpg";
import D67 from "../assets/cancer/70 (67).jpg";
import D68 from "../assets/cancer/70 (68).jpg";

const BCancer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // D5, D7,
  const images = [
    // D1,
    D2,
    D3,
    // D4,
    D8,
    // D9,
    D13,
    D10,


    // D16,
    D17,
    // D18,
    D19,
    D20,
    D14,
    D15,
    D12,
    D21,
    D22,
    D23,
    D24,
    D25,

    D46,
    D47,
    // D26,
    // D27,
    D56,
    // D57,
    D58,
    D59,

    D43,
    // D49,
    // D50,
    D51,
    D52,
    D41,
    D42,

    D44,
    D30,

    D35,
    // D28,
    D29,

    D31,
    // D32,
    // D33,
    // D34,

    // D36,

    D37,
    D38,
    // D40,
    // D41,
    // D42,

    // D45,

    // D48,
  
    D53,
    D54,
    D55,

    // D60,
    D61,
    // D65,
    D62,
    D63,


    D67,


    // D33,
    // D34,
    // D57, D60,



    // D6,
    D11,

    D39,
    D64,
    D66,
    D68,

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

export default BCancer;
