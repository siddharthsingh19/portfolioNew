import React from "react";
import "./Contact.css";
const Contact = () => {
  
  const contactInfo = [
    { id: 1, type: "Phone", value: "+1234567890" },
    { id: 2, type: "Email", value: "example@example.com" },
    { id: 3, type: "WhatsApp", value: "+1234567890" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <div className="contact inner-page">
        <div className="contact-top">
          <h1 className="fade">Contact</h1>
          <div className="shift-up">
            <h4>Get in Touch</h4>
            <h2 className="red">Reach Me</h2>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-left">
          {contactInfo.map(info => (
          <div key={info.id} className="contact-box">
            <h3>{info.type}</h3>
            <p>{info.value}</p>
          </div>
        ))}
          </div>
          <div className="contact-bottom-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="flex g20">

              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              </div>
              <textarea placeholder="Message" rows={5}></textarea>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
