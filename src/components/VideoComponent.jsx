import React, { useRef } from "react";

const VideoComponent = ({ videoSource }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="videoContentContainer"
    >
      <video
        ref={videoRef}
        controls={false}
        loop
        muted
        className="videoContent"
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
