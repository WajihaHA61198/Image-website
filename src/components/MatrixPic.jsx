import React, { useState } from "react";
import D1 from "../assets/matrix/1.JPG";
import D2 from "../assets/matrix/2.JPG";
import D3 from "../assets/matrix/3.JPG";
import D4 from "../assets/matrix/4.JPG";
import D5 from "../assets/matrix/5.JPG";
import D6 from "../assets/matrix/6.JPG";

const MatrixPic = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [D1, D2, D3, D4, D5, D6];

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

export default MatrixPic;
