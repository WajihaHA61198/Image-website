import React, { useRef, useEffect, useState } from "react";

const HomeVideo = () => {
  const videoRef = useRef(null);
  const [isPlayingHome, setIsPlayingHome] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const videoBottom = video.getBoundingClientRect().bottom;

      if (videoTop <= window.innerHeight && videoBottom >= 0) {
        setIsPlayingHome(true);
      } else {
        setIsPlayingHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlayingHome) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlayingHome]);

  return (
    <div className="mb-10">
      <video
        ref={videoRef}
        autoPlay
        controls
        muted
        loop
        src="https://cdn.shopify.com/videos/c/o/v/9c030b15d09f4228a0b9bb572a8d1b53.mp4"
      ></video>
    </div>
  );
};

export default HomeVideo;
