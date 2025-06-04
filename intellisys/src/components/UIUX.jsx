import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./UIUX.css";
import UIUX_logo from "../assestes/UIUX_logo.jpg";
import { Link } from "react-router-dom";

const UIUXpage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: "mobile" });
  }, []);

  const services = [
    {
      icon: "bi-search",
      title: "UX Research & Strategy",
      desc: "We analyze user behavior to create an effective design strategy.",
    },
    {
      icon: "bi-vector-pen",
      title: "Wireframing & Prototyping",
      desc: "Creating interactive wireframes and prototypes for better visualization.",
    },
    {
      icon: "bi-phone",
      title: "Web & Mobile UI Design",
      desc: "Designing responsive and visually stunning interfaces for all devices.",
    },
    {
      icon: "bi-people",
      title: "User Journey Mapping",
      desc: "Understanding user touchpoints to enhance experience flow.",
    },
    {
      icon: "bi-clipboard-check",
      title: "Usability Testing",
      desc: "Evaluating designs with real users to improve efficiency.",
    },
    {
      icon: "bi-universal-access",
      title: "Accessibility Optimization",
      desc: "Ensuring designs meet accessibility standards for all users.",
    },
  ];

  const stack = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      alt: "Figma",
      name: "Figma",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
      alt: "Adobe XD",
      name: "Adobe XD",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
      alt: "Sketch",
      name: "Sketch",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      alt: "HTML & CSS",
      name: "HTML & CSS",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
    },
  ];

  return (
    <div className="uiux-page">
      {/* Hero Section */}
      <header className="hero-sectionuiux" data-aos="fade-up">
        <div className="containeruiux">
          <div className="hero-contentuiux">
            <h1>
              UI/UX <span className="security-orange">Design</span>
            </h1>
          </div>
        </div>
      </header>

      {/* About UI/UX Section */}
      <section className="about-sectionuiux">
        <div className="containeruiux">
          <div className="about-imageuiux" data-aos="fade-up">
            <img
              src={UIUX_logo}
              alt="UI/UX Design Banner"
              className="uiux-img"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
          <h2 data-aos="fade-up">
            Crafting Engaging <span className="highlightuiux">User Experiences</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            At Intellisys, we design intuitive, user-friendly, and visually stunning interfaces that enhance customer engagement. Our UI/UX development services focus on user-centric design, ensuring seamless interactions that boost brand identity and conversions.
          </p>
        </div>
      </section>

      {/* UI/UX Services */}
      <section className="servicesuiux">
        <div className="containeruiux">
          <h2 data-aos="fade-up">
            Our <span className="highlightuiux">UI/UX Services</span>
          </h2>
          <div className="services-listuiux">
            {services.map((service, idx) => (
              <div
                className="service-itemuiux"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack">
        <div className="container">
          <h2>
            Our <span className="highlight">UI/UX Technology Stack</span>
          </h2>
          <div className="tech-grid">
            {stack.map((item, index) => (
              <div className="tech-item" key={index} data-aos="fade-up">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="80"
                  height="80"
                />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-usuiux">
        <div className="containeruiux">
          <h2>
            Why Choose <span className="highlightuiux">Our UI/UX Services?</span>
          </h2>
          <div className="choose-us-griduiux">
            {[
              { icon: "bi-lightbulb", title: "Innovative Designs", desc: "We craft unique, visually appealing, and modern designs tailored to your brand." },
              { icon: "bi-speedometer", title: "Performance Focused", desc: "Our UI/UX designs are optimized for speed, efficiency, and smooth user interaction." },
              { icon: "bi-graph-up-arrow", title: "Conversion-Driven", desc: "We design with a focus on increasing user engagement and boosting conversions." },
              { icon: "bi-award", title: "Industry Expertise", desc: "Our team has deep industry knowledge and follows the latest design trends." },
            ].map((item, idx) => (
              <div className="choose-itemuiux" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container1">
          <h2>On-Site Training & Workshops</h2>
          <div className="info-wrapper">
            <div className="info-box">
              <h3>University Collaborations</h3>
              <p>
                We collaborate with leading universities to integrate real-world experience into the classroom, preparing students for future success.
              </p>
            </div>
            <div className="info-box">
              <h3>Industry Expert Sessions</h3>
              <p>
                Our training includes sessions led by industry experts, providing insights into the latest trends, tools, and best practices in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="containercta">
          <h2>Looking for a Modern & Engaging UI?</h2>
          <p>Let's build a stunning and user-friendly digital experience together!</p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIUXpage;
