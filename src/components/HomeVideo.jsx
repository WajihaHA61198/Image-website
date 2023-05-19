import React from "react";

const HomeVideo = () => {
  return (
    <div className="mb-10">
      <video
        autoPlay
        loop
        // controls
        src="https://cdn.shopify.com/videos/c/o/v/287d2bc86acd45058744838a32008058.mp4"
        tabindex="-1"
      ></video>
    </div>
  );
};

export default HomeVideo;
