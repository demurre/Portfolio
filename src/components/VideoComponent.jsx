import React from "react";

const VideoComponent = ({ videoSource }) => {
  const iframeRef = React.useRef(null);

  return (
    <div className="videoContentContainer">
      <iframe
        ref={iframeRef}
        src={videoSource}
        frameBorder="0"
        allowFullScreen
        className="videoContent"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
