import React from "react";
import "./contact.css";

const MapCard = () => {
  return (
    <iframe
      className="map-card"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3624487872143!2d3.525!3d6.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6e5b03b91d1%3A0x58eaeed84e8b6a5!2sIkota%20Shopping%20Complex!5e0!3m2!1sen!2sng!4v1693848448888!5m2!1sen!2sng"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Facibus Location in Lagos"
    ></iframe>
  );
};

export default MapCard;
