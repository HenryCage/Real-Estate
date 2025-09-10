import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";



const AboutUs = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("http://localhost:7000/teamMembers");
        const data = await response.json();
        setTeam(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        lineHeight: "1.6",
        padding: "0",
        margin: "0",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6') center/cover no-repeat",
          color: "rgba(15, 2, 15, 0.89)",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>ABOUT US</h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla totam dicta vel saepe minus in deleniti minima iste est!
        </p>
      </section>

      {/* About Us */}
      <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <section style={{ marginBottom: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            At <strong>Facibus Housing</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a magni quasi quos praesentium quae exercitationem reiciendis! Recusandae aperiam similique quia quibusdam reiciendis impedit. Odit nostrum ad enim fugit quae, voluptatem qui facilis, voluptatibus nesciunt repellendus commodi ratione ex dolorum quos, exercitationem placeat! Sed rerum sapiente praesentium saepe, est cum eos aut! Amet a nostrum illum, nihil sunt minima officiis necessitatibus est repudiandae iure ullam, at iusto nulla consequatur ut.
          </p>
          <p style={{ fontSize: "18px" }}>
            We have successfully built and developed over 100 housing units
            through our prestigious Pentagon Court Housing Series across Lekki,
            Lagos — redefining affordable luxury living.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "30px",
            }}
          >
            Our Values
          </h2>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            {[
              {
                title: "Integrity",
                desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!",
              },
              {
                title: "Customer Focus",
                desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!",
              },
              {
                title: "Expertise",
                desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!",
              },
              {
                title: "Community",
                desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!",
              },
            ].map((value, index) => (
              <li
                key={index}
                style={{
                  padding: "20px",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  background: "#f9f9f9",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#1d3557" }}>
                  {value.title}
                </h3>
                <p>{value.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Mission */}
        <section style={{ marginBottom: "60px", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Our Mission</h2>
          <p style={{ fontSize: "18px", maxWidth: "900px", margin: "0 auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque esse ut libero id ullam. Error totam eum laudantium aperiam minus repellat fugiat consequatur, sequi, magni beatae facere doloremque. Aspernatur, velit. Impedit vero, consequatur ipsam fugiat officiis nemo esse porro, magnam nulla veritatis debitis id, ullam reiciendis tenetur repudiandae aspernatur!
          </p>
        </section>

        {/* Core Team */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "30px",
            }}
          >
            Meet Our Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px",
            }}
          >
            {loading ? (
              <p>Loading team members...</p>
            ) : (
              team.map((member) => (
                <div
                  key={member.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginBottom: "15px",
                    }}
                  />
                  <h3 style={{ margin: "10px 0", fontSize: "20px" }}>
                    {member.name}
                  </h3>
                  <p style={{ color: "#555", marginBottom: "12px" }}>
                    {member.role}
                  </p>
                  <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#0e76a8", fontSize: "20px" }}
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#1da1f2", fontSize: "20px" }}
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {member.socials?.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e4405f", fontSize: "20px" }}
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            background: "#1d3557",
            color: "#fff",
            padding: "60px 20px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Ready to begin your journey?
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Whether you’re looking to buy, invest, or explore a better way to
            live — let’s go far together.
          </p>
          <Link to='/contact'>
            <button
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                border: "none",
                borderRadius: "8px",
                background: "#e63946",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d62839")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#e63946")}
            >
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
