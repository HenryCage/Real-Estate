import "./contact.css";

const ContactInfoCard = () => {
  return (
    <div className="info-card">
      <h2 className="info-title">Contact Us</h2>

      <p>
        Facibus Housing Suite, <br />
        53 Ikota Shopping Complex, <br />
        Victoria Garden City, Lagos, Nigeria
      </p>

      <h3>US Head Office</h3>
      <p>
        08 The Green, Suite 8334, Dover, DE 19901 <br />
        Phone number: +1 302 202 1321
      </p>

      <div className="info-contact">
        <a href="tel:+2347032999583">📞 +234 703 2999 583</a>
        <a href="mailto:info@facibushousing.com">✉️ info@facibushousing.com</a>
      </div>
    </div>
  );
};

export default ContactInfoCard;