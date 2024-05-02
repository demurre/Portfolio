import "./Projects.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import projects from "../../assets/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className="projectItem">
          <VideoComponent videoSource={project.preview} />
          <div className="projectInfo">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              Tech Stack: <img src={project.stack} alt="Tech Stack" />
            </p>
            <p>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Code <GitHubIcon />
              </a>
              |
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo <LaunchIcon />
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
