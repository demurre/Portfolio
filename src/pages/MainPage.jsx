import React from "react";
import Navigation from "../components/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../App.css";
import projects from "../assets/projects";
import VideoComponent from "../components/VideoComponent";
import ContactMe from "../components/ContactMe";

const MainPage = () => {
  return (
    <>
      <Navigation />
      <section id="home" className="main">
        <h1>Hi there 👋</h1>
        <h1>I'm Yarik - React Frontend Developer</h1>
        <div className="skills">
          <p>
            Tech Skills
            <img src="https://skillicons.dev/icons?i=html,css,js,react" />
          </p>
        </div>
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
      </section>
      <section id="about" className="main">
        <div>
          <h3>About me</h3>
          <p>
            I'm Yarik - React Front-end Developer,
            <br /> glad to improve my skills!
          </p>
          <h4>Languages:</h4>
          <p>
            Ukrainian: Native <br /> English: B1
          </p>
          <h4>Tech Skills:</h4>
          <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react" />
          <h4>Tools:</h4>
          <img src="https://skillicons.dev/icons?i=git,github,figma,materialui,vercel" />
        </div>
      </section>
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
      </section>
      <section id="contact" className="main">
        <ContactMe />
      </section>
    </>
  );
};

export default MainPage;
