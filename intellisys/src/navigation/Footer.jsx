import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import intellisys_img from "../assestes/intellisys_img.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Column */}
        <div className="footer-column">
          <div className="footer-logo">
            <img
              src={intellisys_img}
              alt="Company Logo"
              className="footer-logo-img"
            />
          </div>
          <h3 className="footer-title">Address</h3>
          <p className="footer-address">
            Gera Imperim Rise, 328-B, Wipro Circle,
            <br />
            Opp. to Wipro Company, Hinjawadi Phase II,
            <br />
            Hinjawadi Rajiv Gandhi Infotech Park,
            <br />
            Pune, Maharashtra 411057
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column text-center">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/technology">Technology</a>
            <a href="/career">Career</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        {/* Contact & Social Column */}
        <div className="footer-column text-right">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <strong>Phone:</strong>
              <a href="tel:+919112817771" className="phone-link">
                +91 91128 17771
              </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <strong>Email:</strong>
              <a
                href="mailto:info@intellisysitsolutions.com"
                className="footer-email"
              >
                info@intellisysitsolutions.com
              </a>
            </div>
          </div>

          <h3 className="footer-title1">Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/intellisys-it-solutions-private-limited"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/intellisys_it_solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2025 INTELLISYS IT Solutions Private Limited. All Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <Link to="/" className="footer-designer">
            Team INTELLISYS
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
