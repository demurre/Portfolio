import React, { useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    const mailtoLink = `mailto:y.drozdov130705@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-items">
      <h3>Contact Me</h3>

      <label>Your Email</label>
      <input
        className="form-control"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
      />

      <label>Subject</label>
      <input
        className="form-control"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <label>Message</label>
      <textarea
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button className="btn" onClick={handleSendClick}>
        Send
      </button>
    </div>
  );
};

export default ContactMe;
