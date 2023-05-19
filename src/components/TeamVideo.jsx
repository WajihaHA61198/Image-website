import React, { useRef, useEffect, useState } from "react";

const TeamVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const videoBottom = video.getBoundingClientRect().bottom;

      if (videoTop <= window.innerHeight && videoBottom >= 0) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <div className="mb-10">
      <video
        muted
        ref={videoRef}
        autoPlay
        loop
        controls
        src="https://cdn.shopify.com/videos/c/o/v/a73d9c5953fe44ba859e02025c0b837a.mp4"
      ></video>
      {/* <div style={{ height: "50px" }}></div>  */}
    </div>
  );
};

export default TeamVideo;
