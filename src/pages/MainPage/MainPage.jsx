import styles from "./MainPage.module.css";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";

const MainPage = () => {
  return (
    <>
      <div className={styles["main"]}>
        <About />
        <Projects />
      </div>
    </>
  );
};

export default MainPage;
