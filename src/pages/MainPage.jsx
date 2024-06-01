import "../App.css";
import Navigation from "../components/Navigation/Navigation";

import ContactMe from "../components/ContactMe/ContactMe";
import Projects from "../components/Projects/Projects";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { projects, skills, tools } from "../assets/assets";

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
            <span>
              <a
                href="https://www.linkedin.com/in/yaroslav-drozdov-26402928a/"
                className="icon-link"
              >
                <LinkedinFilled style={{ fontSize: "30px" }} />
              </a>
              <a href="https://github.com/demurre" className="icon-link">
                <GithubFilled style={{ fontSize: "30px", padding: "4px" }} />
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
          <div>
            {skills.map((skill, index) => (
              <img key={index} src={skill} alt={`Skill ${index + 1}`} />
            ))}
          </div>
          <h4>Tools:</h4>
          <div>
            {tools.map((tool, index) => (
              <img key={index} src={tool} alt={`Tool ${index + 1}`} />
            ))}
          </div>
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
