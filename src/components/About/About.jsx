import styles from "./About.module.css";
import { skills, tools } from "../../assets/assets";
import ContactMe from "../ContactMe/ContactMe";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div className={styles["about-wrapper"]}>
      <div className={styles["about"]}>
        <h1>About me</h1>
        <p>
          I&apos;m Yarik - QA/React Frontend Developer, currently a student.
          Have experience in crowdtesting on TestIo and with crafting UI mockups
          in Figma and developing them. Look forward to gaining more experience
          and improving my skills!
        </p>
        <h2>Languages:</h2>
        <p>
          Ukrainian: Native <br /> English: B1
        </p>
        <h2>Tech Skills:</h2>
        <div className={styles["skills"]}>
          {skills.map((skill, index) => (
            <img
              style={{ borderRadius: "var(--border-radius-m)" }}
              key={index}
              src={skill.src}
              alt={skill.alt}
            />
          ))}
        </div>
        <h2>Tools:</h2>
        <div className={styles["skills"]}>
          {tools.map((tool, index) => (
            <img
              style={{ borderRadius: "var(--border-radius-m)" }}
              key={index}
              src={tool.src}
              alt={tool.alt}
            />
          ))}
        </div>
      </div>
      <ContactMe />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        href="/CV_Yaroslav_Drozdov.pdf"
        download
        className={styles["download-button"]}
      >
        Download my CV
      </Button>
    </div>
  );
};

export default About;
