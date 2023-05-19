import React, { useState } from "react";
import { Link } from "react-router-dom";

const FooterMenu = ({
  title,
  content: [
    { li, link },
    { li2, link2 },
    { li3, link3 },
    { li4, link4 },
    { li5, link5 },
    { li6, link6 },
    { li7, link7 },
  ],
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      {/* @-desktop footer */}
      <div className="sx:hidden md:block">
        <div className="">
          <h6 className="font-medium mb-4">{title}</h6>
          <ul className="md:text-xs lg:text-sm xll:text-[0.73rem] font-normal">
            <li
              // hover-underline-animation
              className="mb-1 hover:text-[#919191]"
              onClick={handleClickNav}
            >
              <Link to={link}>{li}</Link>
            </li>{" "}
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link2}>{li2}</Link>
            </li>{" "}
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link3}>{li3}</Link>
            </li>{" "}
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link4}>{li4}</Link>
            </li>
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link5}>{li5}</Link>
            </li>
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link6}>{li6}</Link>
            </li>
            <li className="mb-1 hover:text-[#919191]" onClick={handleClickNav}>
              <Link to={link7}>{li7}</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------ */}
      {/* @-mobile footer */}
      <div className="md:hidden xs:block">
        <div
          className="flex flex-row justify-between cursor-pointer p-4 text-sm font-medium"
          onClick={() => setIsActive(!isActive)}
        >
          <h6 className="">{title}</h6>
          <div>
            {isActive ? (
              <i className="fa fa-minus" aria-hidden="true"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}
          </div>
        </div>
        {isActive && (
          <div className="p-4 text-[13px]">
            <ul className="text-sm font-normal">
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link}>{li}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link2}>{li2}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link3}>{li3}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link4}>{li4}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link5}>{li5}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link6}>{li6}</Link>
              </li>
              <li className="mb-1" onClick={handleClickNav}>
                <Link to={link7}>{li7}</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* ------------------------------ */}
    </React.Fragment>
  );
};

export default FooterMenu;
