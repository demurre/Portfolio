import styles from "./About.module.css";
import { skills, tools } from "../../assets/assets";
import ContactMe from "../ContactMe/ContactMe";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div className={styles["about-wrapper"]}>
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
        <div className={styles["skills"]}>
          {skills.map((skill, index) => (
            <img
              style={{ borderRadius: "var(--border-radius-m)" }}
              key={index}
              src={skill}
              alt={`Skill ${index + 1}`}
            />
          ))}
        </div>
        <h4>Tools:</h4>
        <div className={styles["skills"]}>
          {tools.map((tool, index) => (
            <img
              style={{ borderRadius: "var(--border-radius-m)" }}
              key={index}
              src={tool}
              alt={`Tool ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <ContactMe />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        href="/CV_Drozdov.pdf"
        download
        className={styles["download-button"]}
      >
        Download my CV
      </Button>
    </div>
  );
};

export default About;
