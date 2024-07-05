import styles from "./Projects.module.css";
import share from "../../pages/MainPage/MainPage.module.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import { projects } from "../../assets/assets";
import { ExportOutlined, GithubFilled } from "@ant-design/icons";

const Projects = () => {
  return (
    <>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className={styles["project-item"]}>
          <VideoComponent videoSource={project.preview} />
          <div className={styles["project-info"]}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              Tech Stack: <br />
              {project.stack.map((link, index) => (
                <img
                  className={share["skill-item"]}
                  key={index}
                  src={link}
                  alt="Tech Stack"
                />
              ))}
            </p>
            <p>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Code <GithubFilled />
              </a>
              |
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo <ExportOutlined />
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
