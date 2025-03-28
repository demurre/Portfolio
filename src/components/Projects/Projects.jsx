import styles from "./Projects.module.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import { projects } from "../../assets/assets";
import { ExportOutlined, GithubFilled } from "@ant-design/icons";
import { Carousel } from "antd";

const Projects = () => {
  return (
    <div className={styles["project-wrapper"]}>
      <Carousel autoplay draggable arrows className={styles["carousel"]}>
        {projects.map((project, index) => (
          <div key={index} className={styles["project-item"]}>
            <VideoComponent videoSource={project.preview} />
            <div className={styles["project-info"]}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Tech Stack:</p>
              <div className={styles["tech-stack"]}>
                {project.stack.map((stackItem, index) => (
                  <img
                    style={{ borderRadius: "var(--border-radius-m)" }}
                    key={index}
                    src={stackItem.src}
                    alt={stackItem.alt}
                  />
                ))}
              </div>
              <p>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex="-1"
                >
                  Code <GithubFilled />
                </a>
                |
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex="-1"
                >
                  Demo <ExportOutlined />
                </a>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
