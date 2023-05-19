import React from "react";
import "../styles/button.css";

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={(event) => onClick(event)}
      className="btn-3 font-normal md:text-xs leading-5 lg:px-[27px] lg:py-[10px] md:px-[32px] md:py-[10px] sx:px-[20px] sx:py-[7px] sx:text-xs hover:text-black"
    >
      <span className="btn-span">
        {value}
        <i
          className="fa fa-light fa-arrow-right text-[#969696] ml-4 btn-icons"
          aria-hidden="true"
        ></i>
      </span>
    </button>
  );
};

export default Button;
