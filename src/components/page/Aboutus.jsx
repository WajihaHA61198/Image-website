import React from "react";
import { About, Board, VisionMission } from "../index";

const Aboutus = ({ activeSections }) => {
  return (
    <React.Fragment>
      <div id="about" className={activeSections === "about" ? "" : ""}>
        <About />
      </div>

      <div
        id="vision-and-mission"
        className={activeSections === "vision" ? "" : ""}
      >
        <VisionMission />
      </div>

      <div
        id="board-of-directors"
        className={activeSections === "board" ? "" : ""}
      >
        <Board />
      </div>
    </React.Fragment>
  );
};

export default Aboutus;
