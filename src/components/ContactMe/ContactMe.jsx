import styles from "./ContactMe.module.css";
import { Button } from "antd";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";

const ContactMe = () => {
  const [form] = useForm();

  const onFinish = (values) => {
    const { name, email, subject, message } = values;
    const bodyMessage = `Name: ${name} Email: ${email} Message: ${message}`;
    const mailtoLink = `mailto:y.drozdov130705@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyMessage)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <h3>Contact Me</h3>

      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <div className={styles["label-input"]}>
          <input
            className={styles["form-control"]}
            id="name-input"
            type="text"
            required
          />
          <label htmlFor="name_input">Name</label>
        </div>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <div className={styles["label-input"]}>
          <input
            className={styles["form-control"]}
            type="email"
            id="email-input"
            required
          />
          <label htmlFor="email-input">Email</label>
        </div>
      </Form.Item>

      <Form.Item
        name="subject"
        rules={[{ required: true, message: "Please enter the subject" }]}
      >
        <div className={styles["label-input"]}>
          <input
            className={styles["form-control"]}
            type="text"
            id="subject-input"
            required
          />
          <label htmlFor="subject-input">Subject</label>
        </div>
      </Form.Item>

      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <div className={styles["label-input"]}>
          <textarea
            className={styles["form-control"]}
            id="message-input"
            type="text"
            required
          />
          <label htmlFor="message-input">Message</label>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactMe;
