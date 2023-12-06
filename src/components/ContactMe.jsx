import React, { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    const bodyMessage = `Name: ${name} Email: ${email} Message: ${message}`;
    const mailtoLink = `mailto:y.drozdov130705@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyMessage)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-items">
      <h3>Contact Me</h3>
      <input
        className="form-control"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />

      <input
        className="form-control"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
      />

      <input
        className="form-control"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />

      <textarea
        className="form-control"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>

      <button className="btn" onClick={handleSendClick}>
        Send
      </button>
    </div>
  );
};

export default ContactMe;
