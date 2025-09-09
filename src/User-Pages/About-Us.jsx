import React from "react";
import "../styles/AboutUs.css";
import teamMembers from "../data/team";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Facibus Housing</h1>
        <p>
          At Facibus Housing, our core philosophy is beyond the construction of properties. We are in the noble pursuit of actualizing dreams and nurturing the growth of vibrant communities. Our vision is to revolutionise housing in Lagos, setting a new benchmark for unparalleled housing solutions that promise sustainability, innovation, and a sense of belonging. We take immense pride in our remarkable achievement of building and developing over 100 units of houses through our prestigious Pentagon Court Housing Series. This success story unfolds from Phase 1 to Phase 5, located in the coveted Ikota region of Lekki, Lagos.
        </p>
      </section>

      {/* Overview & Vision */}
      <section className="about-overview">
        <h2>Who We Are</h2>
        <p>
          At the core of Lagos’s dynamic real estate progression stands Summit Home Limited, parent company and foundation to the esteemed brand, Facibus Housing. Our brand has illuminated the path of innovation and advancement in the housing sector, mirroring the vitality and promise of Lagos itself.
          As Summit Home Limited’s celebrated brand, Facibus Housing embodies a commitment to solving the housing deficit in Lagos and creating accessible luxury. Our pledge is to continuously redefine affordable housing, ensuring that our homes provide comfort and sustainability.
          Together, Summit Home Limited and Facibus Housing are more than just a name; we are a promise of quality, a vision of community, and architects of a future where everyone in Lagos can find a place to call home.
        </p>
      </section>

    

      
      {/* Core Team */}
          <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-socials">
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.socials?.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to begin your journey?</h2>
        <p>
          Whether you’re looking to buy, invest, or explore a better way to live—let’s go far together.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
