import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navigation from "../components/Navigation/Navigation";
import projects from "../assets/projects";
import ContactMe from "../components/ContactMe/ContactMe";
import Projects from "../components/Projects/Projects";

const MainPage = () => {
  return (
    <>
      <Navigation />

      <section id="home" className="main">
        <div className="content">
          <img className="avatar" src="/avatar.jpg" alt="avatar" />
          <div className="text-content">
            <h1>Hi there 👋</h1>
            <h1>I'm Yarik - React Frontend Developer</h1>
            <img
              className="skills"
              src="https://skillicons.dev/icons?i=html,css,js,react"
            />
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
          </div>
        </div>
      </section>

      <section id="about" className="main">
        <div className="about">
          <h3>About me</h3>
          <p>
            I'm Yarik - React Frontend Developer, currently studying in Dnipro
            University of Technology. Have experience with crafting UI mockups
            in Figma and develop them. Look forward to gaining more experience
            and improving my skills!
          </p>
          <h4>Languages:</h4>
          <p>
            Ukrainian: Native <br /> English: B1
          </p>
          <h4>Tech Skills:</h4>
          <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react" />
          <h4>Tools:</h4>
          <img src="https://skillicons.dev/icons?i=git,github,figma,materialui,vercel,vite" />
        </div>
      </section>

      <section id="projects" className="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="main">
        <ContactMe />
      </section>
    </>
  );
};

export default MainPage;
