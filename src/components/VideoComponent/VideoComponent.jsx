import "./VideoComponent.css";
import { useRef } from "react";

const VideoComponent = ({ videoSource }) => {
  const iframeRef = useRef();

  return (
    <div className="videoContentContainer">
      <iframe
        ref={iframeRef}
        src={videoSource}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="videoContent"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
