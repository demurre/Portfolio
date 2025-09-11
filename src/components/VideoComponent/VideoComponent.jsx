import styles from "./VideoComponent.module.css";

const VideoComponent = ({ videoSource, name }) => {
  return (
    <div className={styles["video-content-container"]}>
      <iframe
        className={styles["video-content"]}
        src={videoSource}
        title={name ? `${name} preview video` : "Project preview video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
