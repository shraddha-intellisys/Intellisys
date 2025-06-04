import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Website.css";
import web_design from "../assestes/web_design.png";
import website from "../assestes/website.png";

const Website = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero-sectionwebsite" data-aos="fade-up">
        <div className="containerwebsite">
          <div className="hero-contentwebsite">
            <h1>Website Development</h1>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="serviceswebsite" data-aos="fade-up">
        <div className="containerwebsite">
          <h2>
            Let's Put life in your{" "}
            <span className="highlightwebsite">iDEA!</span>
          </h2>
          <div className="services-listwebsite">
            {[
              "Website Development",
              "E-Commerce Development",
              "Custom Web Development",
              "Web Application Development",
              "CMS Development",
              "Website Redesign",
              "SEO Optimization",
              "Responsive Web Design",
            ].map((service, index) => (
              <div
                className="service-itemwebsite"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                key={index}
              >
                <i className="bi bi-check-circle"></i> {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Process */}
      <section className="app-development-process">
        <div className="containerapp">
          <h2 className="section-titleapp" data-aos="fade-up">
            Web Development Process
          </h2>
          <div
            className="process-imageapp"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={website}
              alt="Web Development Process"
              className="process-imgapp"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="containerbenifit">
          <h2 className="section-titlebenifit" data-aos="fade-up">
            What Are the Benefits of Having a Website for Your Business?
          </h2>
          <p
            className="section-subtitlebenifit"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A website can bring multiple benefits to your business. Let's
            explore some of them. With a website, you can:
          </p>

          <div className="benefits-imageweb" data-aos="zoom-in">
            <img
              src={web_design}
              alt="Web Development Benefits"
              className="benefits-imgapp"
            />
          </div>

          <div className="benefits-content">
            {/* Benefits Lists - Will stack on mobile */}
            <div className="benefits-list" data-aos="fade-right">
              {[
                "Increase Brand Visibility",
                "Reach a Global Audience",
                "Improve Customer Trust and Credibility",
                "Enhance Customer Engagement and Interaction",
              ].map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <i className="bi bi-check-circle"></i> {benefit}
                </div>
              ))}
            </div>

            <div className="benefits-list" data-aos="fade-left">
              {[
                "Establish a Professional Online Presence",
                "Provide Customer Support Through Multiple Channels",
                "Enable Online Transactions and Sales",
                "Create New Marketing Opportunities",
              ].map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <i className="bi bi-check-circle"></i> {benefit}
                </div>
              ))}
            </div>
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
                We collaborate with leading university to integrate real-world
                experience into the classroom, preparing students for future
                success in technology careers.
              </p>
            </div>
            <div className="info-box">
              <h3>Industry Expert Sessions</h3>
              <p>
                Our training includes sessions led by industry experts,
                providing insights into the latest trends, tools, and best
                practices in technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Website;
