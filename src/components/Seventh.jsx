import React from "react";
import Flickity from "react-flickity-component";
import Events1 from "../assets/Events at Image-1.png";
import Events2 from "../assets/Events at Image-2.png";
import Events3 from "../assets/Events at Image-3.png";
import Events4 from "../assets/Events at Image-4.png";

import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  groupCells: true,
  autoPlay: true,
  prevNextButtons: false,
};

const Seventh = () => {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      <div className="event-carousel">
        <img className="flic-img" src={Events1} alt="Events1" />
      </div>
      <div className="event-carousel">
        <img className="flic-img" src={Events2} alt="Events2" />
      </div>
      <div className="event-carousel">
        <img className="flic-img" src={Events3} alt="Events3" />
      </div>
      <div className="event-carousel">
        <img className="flic-img" src={Events4} alt="Events4" />
      </div>
    </Flickity>
  );
};

export default Seventh;
