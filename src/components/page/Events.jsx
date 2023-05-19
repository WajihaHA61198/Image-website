import React from "react";
import { Eventsimg, Eventsimg2 } from "../index";

const Events = () => (
  <div>
    {/* mobile */}
    <div className="sm:hidden xs:block">
      <Eventsimg />
    </div>

    {/* desktop */}
    <div className="sm:block xs:hidden">
      <Eventsimg2 />
    </div>
    {/* <Eventsimg2 /> */}
  </div>
);

export default Events;
