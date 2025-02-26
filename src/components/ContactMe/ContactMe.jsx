import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles["contact-me"]}>
      <h1>Contact me</h1>
      <span>
        <a href="https://www.linkedin.com/in/yaroslav-drozdov-26402928a/">
          <LinkedinFilled style={{ fontSize: "30px" }} />
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=y.drozdov130705@gmail.com">
          <MailFilled style={{ fontSize: "30px", padding: "4px" }} />
        </a>
        <a href="https://github.com/demurre">
          <GithubFilled style={{ fontSize: "30px", padding: "4px" }} />
        </a>
      </span>
    </div>
  );
};

export default ContactMe;
