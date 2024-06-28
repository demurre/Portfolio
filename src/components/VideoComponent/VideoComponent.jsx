import styles from "./VideoComponent.module.css";
import { useRef } from "react";

const VideoComponent = ({ videoSource }) => {
  const iframeRef = useRef();

  return (
    <div className={styles.video_content_container}>
      <iframe
        className={styles.video_content}
        ref={iframeRef}
        src={videoSource}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
