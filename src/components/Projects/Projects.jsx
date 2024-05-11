import "./Projects.css";
import VideoComponent from "../VideoComponent/VideoComponent";

import projects from "../../assets/projects";
import { ExportOutlined, GithubFilled } from "@ant-design/icons";

const Projects = () => {
  return (
    <>
      <h3>Projects</h3>

      {projects.map((project, index) => (
        <div key={index} className="projectItem">
          <VideoComponent videoSource={project.preview} />
          <div className="projectInfo">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              Tech Stack: <br />
              <img src={project.stack} alt="Tech Stack" />
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
