import React, { useEffect } from "react";
import "./Cloud.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import cloud_computing from "../assestes/cloud_computing.png";
import AOS from "aos";
import { Link } from "react-router-dom";

const CloudSolutions = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-sectioncloud">
        <div className="hero-contentcloud">
          <h1>Cloud Solutions</h1>
          <p>
            Empower your business with scalable, secure, and efficient cloud
            infrastructures tailored to your needs
          </p>
          <a href="#services" className="hero-btncloud">
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2 className="section-title">Our Cloud Services</h2>
          <p className="section-subtitle">
            Comprehensive cloud solutions to transform your business operations
            and enhance productivity
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              iconcloud: "bi-cloud-upload",
              title: "Cloud Migration",
              desc: "Seamlessly transition your existing infrastructure to the cloud with our expert migration services, ensuring minimal disruption to your operations.",
            },
            {
              iconcloud: "bi-hdd-network",
              title: "Cloud Hosting",
              desc: "Reliable and scalable hosting solutions that grow with your business needs while reducing infrastructure maintenance costs.",
            },
            {
              iconcloud: "bi-server",
              title: "Serverless Computing",
              desc: "Build and run applications without managing servers, focusing on your core business logic rather than infrastructure management.",
            },
            {
              iconcloud: "bi-shield-lock",
              title: "Cloud Security",
              desc: "Advanced security protocols and compliance measures to protect your sensitive data and applications in the cloud environment.",
            },
            {
              iconcloud: "bi-database",
              title: "Database Solutions",
              desc: "Fully managed database services that optimize performance, enhance reliability, and reduce administrative overhead.",
            },
            {
              iconcloud: "bi-arrow-repeat",
              title: "Backup & Recovery",
              desc: "Robust backup and disaster recovery solutions to safeguard your critical data and ensure business continuity.",
            },
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`bi ${service.iconcloud}`}></i>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">Our Cloud Implementation Process</h2>
          <p className="section-subtitle">
            A systematic approach to deliver efficient and effective cloud
            solutions
          </p>
        </div>

        <div className="process-container">
          <div className="process-steps">
            {[
              {
                num: 1,
                title: "Assessment",
                desc: "Evaluate your current infrastructure and identify needs",
              },
              {
                num: 2,
                title: "Planning",
                desc: "Design custom cloud solutions architecture",
              },
              {
                num: 3,
                title: "Migration",
                desc: "Seamless transfer of data and applications",
              },
              {
                num: 4,
                title: "Optimization",
                desc: "Enhance performance and cost-efficiency",
              },
              {
                num: 5,
                title: "Management",
                desc: "Ongoing support and continuous improvement",
              },
            ].map((step, index) => (
              <div className="step" key={index}>
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-header">
          <h2 className="section-title">Benefits of Cloud Solutions</h2>
          <p className="section-subtitle">
            Why businesses choose our cloud services for their digital
            transformation
          </p>
        </div>

        <div className="benefits-container">
          <div className="benefits-image">
            <img src={cloud_computing} alt="Cloud Benefits" />
          </div>

          <div className="benefits-content">
            <div className="benefits-list">
              {[
                {
                  icon: "bi-graph-up",
                  title: "Scalability & Flexibility",
                  desc: "Easily scale resources up or down based on business demands without investing in physical infrastructure.",
                },
                {
                  icon: "bi-cash-coin",
                  title: "Cost Efficiency",
                  desc: "Reduce capital expenditure and operational costs with pay-as-you-go pricing models and reduced maintenance needs.",
                },
                {
                  icon: "bi-shield-check",
                  title: "Enhanced Security",
                  desc: "Benefit from enterprise-grade security features, regular updates, and compliance with industry standards.",
                },
                {
                  icon: "bi-people",
                  title: "Remote Collaboration",
                  desc: "Enable seamless teamwork with real-time access to applications and data from anywhere in the world.",
                },
              ].map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <div className="benefit-icon">
                    <i className={`bi ${benefit.icon}`}></i>
                  </div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-desc">{benefit.desc}</p>
                  </div>
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-text">
            Contact us today for a free consultation and discover how our cloud
            solutions can drive your business forward.
          </p>
          <Link to="/contact" className="cta-btn">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default CloudSolutions;
