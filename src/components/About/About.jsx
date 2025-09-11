import styles from "./About.module.css";
import { skills, tools } from "../../assets/assets";
import ContactMe from "../ContactMe/ContactMe";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import BadgeList from "../BadgeList/BadgeList";

const About = () => {
  return (
    <div className={styles["about-wrapper"]}>
      <div className={styles["about"]}>
        <h1>About me</h1>
        <p>
          I&apos;m Yarik - QA Manual/Automation. Have experience in crowdtesting
          on TestIo and automation with Cypress/Playwright. I also have
          experience as a React Frontend Developer with crafting UI mockups in
          Figma and developing them. Look forward to gaining more experience and
          improving my skills!
        </p>
        <h2>Languages:</h2>
        <p>
          Ukrainian: Native <br /> English: B1
        </p>
        <h2>Tech Skills:</h2>
        <BadgeList items={skills} className={styles["skills"]} />
        <h2>Tools:</h2>
        <BadgeList items={tools} className={styles["skills"]} />
      </div>
      <ContactMe />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        href="/CV_Drozdov_QA.pdf"
        download
        className={styles["download-button"]}
      >
        Download my CV
      </Button>
    </div>
  );
};

export default About;
