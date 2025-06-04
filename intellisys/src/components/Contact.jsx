import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert(`Failed to send message: ${data.error || "Try again later."}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact-sectioncontact">
      <div className="containercontact">
        <h1 className="section-titlecontact">Contact Us</h1>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form id="contacti" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Our Office Location</h2>
            <p>
              <FaMapMarkerAlt /> Gera Imperim Rise, 328-B, Opp. to Wipro
              Company, Hinjawadi Phase II, Pune, Maharashtra 411057
            </p>
            <p className="phone-number">
              <FaPhoneAlt />
              <a href="tel:+919112817771" className="phone-link">
                +91 91128 17771
              </a>
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:info@intellisysitsolutions.com">
                info@intellisysitsolutions.com
              </a>
            </p>
            <iframe
              src="https://maps.google.com/maps?q=intellisys%20it%20solutions%20private%20limited&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              title="Office Location"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
