import React from "react";
import Navigation from "../components/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css";

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
            <br /> Tools:{" "}
            <img src="https://skillicons.dev/icons?i=git,github,aws,figma,materialui" />
          </p>
        </div>
      </section>
      <section id="projects" className="projects"></section>
      <section id="contact" className="contact"></section>
    </>
  );
};

export default MainPage;
