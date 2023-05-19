import React from "react";
import { HomeVideo, Second, Third, Fourth, Fifth, Sixth } from "../index";

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeVideo />
      <Second {...props} />
      <Third {...props} />
      <Fourth {...props} />
      <Fifth {...props} />
      <Sixth {...props} />
    </React.Fragment>
  );
};

export default Home;
