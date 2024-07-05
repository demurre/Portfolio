import styles from "./MainPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import ContactMe from "../../components/ContactMe/ContactMe";
import Projects from "../../components/Projects/Projects";
import {
  DownloadOutlined,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { projects, skills, tools } from "../../assets/assets";
import WavingHandIcon from "../../assets/WavingHandIcon";
import { Button, FloatButton } from "antd";

const MainPage = () => {
  return (
    <>
      <Navigation />

      <section id="hero" className={styles["main"]}>
        <div className={styles["content"]}>
          <img className={styles["avatar"]} src="/avatar.jpg" alt="avatar" />
          <div className={styles["text-content"]}>
            <h1>
              Hi there <WavingHandIcon />
            </h1>
            <h1>I&apos;m Yarik - React Frontend Developer</h1>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              href="/src/assets/CV_Drozdov.pdf"
              download
              className={styles["download-button"]}
            >
              Download my CV
            </Button>
            <span>
              <a href="https://www.linkedin.com/in/yaroslav-drozdov-26402928a/">
                <LinkedinFilled style={{ fontSize: "30px" }} />
              </a>
              <a href="https://github.com/demurre">
                <GithubFilled style={{ fontSize: "30px", padding: "4px" }} />
              </a>
            </span>
          </div>
        </div>
      </section>

      <section id="about" className={styles["main"]}>
        <div className={styles["about"]}>
          <h3>About me</h3>
          <p>
            I&apos;m Yarik - React Frontend Developer, currently studying in
            Dnipro University of Technology. Have experience with crafting UI
            mockups in Figma and develop them. Look forward to gaining more
            experience and improving my skills!
          </p>
          <h4>Languages:</h4>
          <p>
            Ukrainian: Native <br /> English: B1
          </p>
          <h4>Tech Skills:</h4>
          <div>
            {skills.map((skill, index) => (
              <img
                className={styles["skill-item"]}
                key={index}
                src={skill}
                alt={`Skill ${index + 1}`}
              />
            ))}
          </div>
          <h4>Tools:</h4>
          <div>
            {tools.map((tool, index) => (
              <img
                className={styles["skill-item"]}
                key={index}
                src={tool}
                alt={`Tool ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles["projects"]}>
        <Projects projects={projects} />
      </section>

      <section id="contact" className={styles["main"]}>
        <ContactMe />
      </section>

      <FloatButton.BackTop />
    </>
  );
};

export default MainPage;
