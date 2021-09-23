import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fy8cgm",
        "template_4rr6dkn",
        e.target,
        "user_7bGx35LhZsIhc1ISPClIA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleSubmit(e);
  }

  return (
    <div className="contact" id="contact">
      <form onSubmit={sendEmail}>
        <div className="left">
          <h2>
            I would <span className="love">love</span> to hear from you!
          </h2>
          <div className="fieldContainer">
            <input
              type="text"
              placeholder="Name"
              className="name"
              name="name"
            />
            <input
              type="text"
              placeholder="Email"
              className="email"
              name="email"
            />
          </div>
          <div className="right">
            <textarea
              name="message"
              className="messageBox"
              placeholder="Message"
            />
            <input
              type="submit"
              className={!message ? "btn" : "sentBtn"}
              value="Send"
            />
            {message && <span>Thank you, I will reply ASAP</span>}
          </div>
        </div>
      </form>
    </div>
  );
}
