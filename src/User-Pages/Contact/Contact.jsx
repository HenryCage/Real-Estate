import "./contact.css";
import MapCard from "./FAQ/MapCard";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import React from "react";
import FAQ from "./FAQ/Faq";

const Contact = () => {
  return (
    <div className="contact-page">
      
      <div className="contact-card">
        <MapCard />
      </div>

      
      <div className="info-wrapper">
        <ContactInfoCard />
      </div>

      
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Contact;