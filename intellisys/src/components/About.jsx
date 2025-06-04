import React from "react";
import "./About.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About_girl from "../assestes/About_girl.jpg";
import projectprocess from "../assestes/projectprocess.png";
import vidyank from "../assestes/vidyank.png";
import defenceguru from "../assestes/defenceguru.png";
import c1 from "../assestes/c1.png";
import c2 from "../assestes/c2.png";
import c3 from "../assestes/c3.jpg";
import c4 from "../assestes/c4.png";
import c5 from "../assestes/c5.png";
import c6 from "../assestes/c6.png";
import c7 from "../assestes/c7.png";
import c8 from "../assestes/c8.png";
import c9 from "../assestes/c9.png";
import c10 from "../assestes/c10.png";

const clientLogos = [
  { id: 1, img: vidyank, alt: "Vidyank" },
  { id: 2, img: defenceguru, alt: "Defense Guru" },
  { id: 3, img: c1, alt: "Client 1" },
  { id: 4, img: c2, alt: "Client 2" },
  { id: 5, img: c3, alt: "Client 3" },
  { id: 6, img: c4, alt: "Client 4" },
  { id: 7, img: c5, alt: "Client 5" },
  { id: 8, img: c6, alt: "Client 6" },
  { id: 9, img: c7, alt: "Client 7" },
  { id: 10, img: c8, alt: "Client 8" },
  { id: 11, img: c9, alt: "Client 9" },
  { id: 12, img: c10, alt: "Client 10" },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="name-only-hero">
        <h1 className="company-name">
          About <span>Company</span>
        </h1>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="content-wrapper">
          <div className="image-container">
            <div className="border-frame"></div>
            <img
              src={About_girl}
              alt="Smiling professional with laptop"
              loading="lazy"
              width="400"
              height="400"
            />
          </div>
          <div className="text-content">
            <h2 className="main-title">
              Discover how <span className="highlight">Intellisys</span> deliver
              cutting-edge solutions tailored to empower your business.
            </h2>
            <p className="description">
              At Intellisys, we combine innovation and expertise to deliver
              superior software solutions. From software testing to AWS DevOps,
              we ensure your digital transformation is seamless and scalable.
              Our Android and web development teams craft intuitive applications
              and websites, providing unmatched user experiences. Join us in
              shaping the future with our hands-on internship programs designed
              to inspire the tech leaders of tomorrow.
            </p>
            <p className="description">
              From dynamic campaigns to data-driven insights, we're here to help
              you thrive in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-containerabout">
        <div className="values-sectionabout">
          <div className="contentabout">
            <h2 className="titleabout">
              Our <span>Values</span>
            </h2>
            <p className="subtitle">
              Driving innovation, fostering talent, and building impactful
              solutions.
            </p>
          </div>

          <div className="values-cardsabout">
            {[
              { icon: "bi-bullseye", title: "Mission", text: "Empowering businesses with innovative, scalable solutions while nurturing future tech talent." },
              { icon: "bi-lightbulb", title: "Vision", text: "Leading digital transformation with impactful solutions that enrich user experiences." },
              { icon: "bi-gem", title: "Core Values", text: "Commitment to excellence and continuous innovation for sustainable success." },
            ].map((val, idx) => (
              <div className="cardabout" key={idx}>
                <div className="iconabout"><i className={`bi ${val.icon}`}></i></div>
                <h3>{val.title}</h3>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">Our Project Delivery Process</h2>
          <p className="process-description">
            We follow a structured approach to ensure seamless project execution
            and delivery.
          </p>
          <div className="process-image-container">
            <img
              src={projectprocess}
              alt="Project Delivery Process Diagram"
              className="process-image"
              loading="lazy"
              width="600"
              height="300"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <h2 className="clients-title">
          Our <span>Clients</span>
        </h2>
        <p className="clients-subtitle">
          We have worked with renowned names. From hotels, offices, and homes,
          we have collaborated with clients from various industries.
        </p>
        <div className="slider" aria-label="Client logos">
          <div className="slide-track">
            {clientLogos.map((logo) => (
              <div className="slide" key={logo.id}>
                <img
                  src={logo.img}
                  alt={logo.alt}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
