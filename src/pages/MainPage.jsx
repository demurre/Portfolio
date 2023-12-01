import React from "react";
import Navigation from "../components/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../App.css";
import projects from "../assets/projects";

const MainPage = () => {
  return (
    <>
      <Navigation />
      <section id="home" className="main">
        <h1>
          Hi there 👋 <br />
          I'm Yarik - React Frontend Developer
        </h1>
        <span>
          <a
            href="https://www.linkedin.com/in/yaroslav-drozdov-26402928a/"
            className="icon-link"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/demurre" className="icon-link">
            <GitHubIcon fontSize="large" />
          </a>
        </span>
        <div className="skills">
          <p>
            Tech Skills
            <img src="https://skillicons.dev/icons?i=html,css,js,react" />
          </p>
        </div>
      </section>
      <section id="about" className="about">
        <div>
          <h3>About me</h3>
          <h4>React Front-end Developer</h4>
          <p></p>
          <p>
            Languages: <br />
            Ukrainian: Native <br /> English: B2
          </p>
          <p>
            Tech Skills:
            <img src="https://skillicons.dev/icons?i=html,css,js,react,mongodb" />
            <br /> Tools:
            <img src="https://skillicons.dev/icons?i=git,github,aws,figma,materialui" />
          </p>
        </div>
      </section>
      <section id="projects" className="projects">
        <div>
          <h3>Projects</h3>
          <div>
            {projects.map((project, index) => (
              <div key={index} className="projectItem">
                <div className="projectVid">
                  <video width="320" height="240" controls>
                    <source src={project.preview} type="video/mp4" />
                  </video>
                </div>
                <div className="projectText">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>
                    Tech Stack: <img src={project.stack} alt="Tech Stack" />
                  </p>
                  <p>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <GitHubIcon />
                    </a>
                    |
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo <LaunchIcon />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact"></section>
    </>
  );
};

export default MainPage;
