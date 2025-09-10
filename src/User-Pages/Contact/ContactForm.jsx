import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
 const handleSubmit = (e) => {
  e.preventDefault();
  let savedForms = JSON.parse(localStorage.getItem("contactForms")) || []; // get old forms from localStorage
  savedForms.push(formData); // add new form data

  // save back to localStorage
  localStorage.setItem("contactForms", JSON.stringify(savedForms));
  
  alert("✅ Form saved locally in your browser!");
  
  setFormData({ name: "", email: "", subject:"", message: "" });
};


  return (
    <div className="form-card">
      <h2>Get In Touch</h2>
      <p>
        We’d be delighted to talk, so please get in touch. Send an email, or give us a call.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm