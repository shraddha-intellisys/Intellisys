import React, { useState, useEffect, useRef } from "react";
import {
  BiLaptop,
  BiCloud,
  BiPhone,
  BiWrench,
  BiBrush,
  BiNews,
  BiSearch,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsPersonBadge, BsPersonLinesFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import bg2 from "../assestes/bg2.mov";
import l1 from "../assestes/l1.png";
import l2 from "../assestes/l2.png";
import l3 from "../assestes/l3.png";
import l4 from "../assestes/l4.png";
import l5 from "../assestes/l5.png";
import l6 from "../assestes/l6.png";

const Home = () => {
  const sliderRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    contact: "",
    description: "",
  });
  const [responseMessage, setResponseMessage] = useState("");


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, category, contact, description } = formData;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const phoneRegex = /^\d{10}$/;
  
    if (!name || !email || !category || !contact || !description) {
      setResponseMessage("⚠ All fields are required.");
      return;
    }
    if (!nameRegex.test(name)) {
      setResponseMessage("⚠ Invalid name format.");
      return;
    }
    if (!emailRegex.test(email)) {
      setResponseMessage("⚠ Invalid email.");
      return;
    }
    if (!phoneRegex.test(contact)) {
      setResponseMessage("⚠ Invalid phone number.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
  
      const data = await response.json();
      setResponseMessage(data.message);
  
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          category: "",
          contact: "",
          description: "",
        });
      }
    } catch (error) {
      setResponseMessage("❌ Server error, please try again later.");
      console.error("Form submission error:", error);
    }
  };


  const [counts, setCounts] = useState({
    employees: 0,
    clients: 0,
    influencers: 0,
    interns: 0,
    experience: 0,
    collab: 0,
  });

  useEffect(() => {
    const targetValues = {
      employees: 45,
      clients: 40,
      influencers: 5,
      interns: 35,
      experience: 2,
      collab: 7,
    };

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newCounts = {};
      Object.keys(targetValues).forEach((key) => {
        newCounts[key] = Math.floor(progress * targetValues[key]);
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const services = [
    {
      serviceIconHome: <BiLaptop className="service-icon" />,
      title: "Custom Software Development",
      description:
        "We build tailored software solutions to enhance business productivity and efficiency.",
    },
    {
      serviceIconHome: <BiCloud className="service-icon" />,
      title: "Cloud Solutions",
      description:
        "Seamless cloud integration, migration, and management for your enterprise.",
    },
    {
      serviceIconHome: <BiPhone className="service-icon" />,
      title: "Mobile App Development",
      description:
        "Developing feature-rich iOS and Android applications with user-friendly interfaces.",
    },
    {
      serviceIconHome: <BiWrench className="service-icon" />,
      title: "Web App Maintenance",
      description:
        "Ensuring optimal performance and security of your web applications.",
    },
    {
      serviceIconHome: <BiBrush className="service-icon" />,
      title: "UI/UX",
      description:
        "Creating modern, engaging, and intuitive user experiences for applications.",
    },
    {
      serviceIconHome: <BiNews className="service-icon" />,
      title: "E-Publishing Services",
      description:
        "Providing high-quality digital publishing and accessibility solutions.",
    },
    {
      serviceIconHome: <BsPersonLinesFill className="service-icon" />,
      title: "Staffing",
      description:
        "Connecting companies with skilled professionals for long-term success.",
    },
    {
      serviceIconHome: <BiSearch className="service-icon" />,
      title: "Sourcing",
      description:
        "Identifying and acquiring the best talents for your organization.",
    },
    {
      serviceIconHome: <BsPersonBadge className="service-icon" />,
      title: "Internship",
      description:
        "Providing real-world experience to students and fresh graduates.",
    },
  ];

  const careerItems = [
    { id: 1, image: l1, title: "Digital Marketing" },
    { id: 2, image: l2, title: "Java Developer" },
    { id: 3, image: l3, title: "Full Stack Trainer" },
    { id: 4, image: l4, title: "Graphic Designer" },
    { id: 5, image: l5, title: "Automation Tester" },
    { id: 6, image: l6, title: "Big Data Analytics" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slides = Array.from(slider.children);
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
      });

      slider.addEventListener("animationiteration", () => {
        slider.style.animation = "none";
        void slider.offsetWidth;
        slider.style.animation = "slide 40s linear infinite";
      });
    }
  }, []);

  const features = [
    {
      icon: "💻",
      title: "Comprehensive IT Solutions",
      description:
        "End-to-end IT solutions, from consulting and development to maintenance and support.",
    },
    {
      icon: "👨‍💻",
      title: "Expert IT Professionals",
      description:
        "Our team consists of certified IT professionals with expertise in various technologies.",
    },
    {
      icon: "🛠️",
      title: "24/7 Support & Maintenance",
      description:
        "Our support team is available around the clock to keep your systems running smoothly.",
    },
    {
      icon: "📈",
      title: "Proven Track Record",
      description:
        "A strong reputation for delivering successful IT projects with measurable results.",
    },
    {
      icon: "⚙️",
      title: "Tailored Solutions",
      description:
        "We customize solutions to fit your business requirements for optimal performance.",
    },
    {
      icon: "🔒",
      title: "Focus on Security",
      description:
        "We prioritize security and compliance to protect your business from cyber threats.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="hero-sectionhome">
        <video autoPlay muted loop className="hero-video">
          <source src={bg2} type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1 className="hero-heading">
              Your Vision Our
              <div className="hero-subheading">
                Intelli<span className="hero-accent">sys</span>
              </div>
              <span className="hero-tagline">Expertise in</span>
              <span
                className="hero-accent"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                Digital Reality
              </span>
            </h1>
            <p className="hero-description">
              Innovative Solutions for Your Digital Journey
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-content">
            <h1 className="welcome-title">
              Welcome to <span className="highlight">Intellisys</span>
              <span className="subtitle">IT Solutions</span>
            </h1>
            <p className="welcome-description">
              Welcome to Intellisys IT Solutions, where we specialize in
              delivering comprehensive digital solutions. Our services include
              full-stack development, offering complete web and mobile app
              solutions from frontend design to backend architecture. We ensure
              your software is market-ready through rigorous software testing
              for reliability and performance. Our AWS DevOps expertise
              optimizes your cloud infrastructure with a focus on automation and
              scalability.
            </p>
            <a href="#services" className="cta-button">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="why-choose-container">
          <h1 className="section-title">
            Why Choose <span className="highlight">Us?</span>
          </h1>
          <p className="section-subtitle">
            We provide industry-leading IT solutions tailored to your needs.
          </p>

          <div className="features-grid" data-aos="fade-up">
            <div className="features-row">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="features-row">
              {features.slice(3).map((feature, index) => (
                <div key={index + 3} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-sectionhome">
        <div className="containerhome mx-auto px-4">
          <h2 className="section-titlehome">
            Our <span className="highlight">Services</span>
          </h2>

          <div className="services-gridhome">
            {services.map((service, index) => (
              <div key={index} className="service-cardhome">
                {service.serviceIconHome}
                <h3 className="service-titlehome">{service.title}</h3>
                <p className="service-descriptionhome">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="intellisys-career-section">
        <h2 id="career-title">
          Explore Career
          <span id="career-highlight">Opportunities at Intellisys</span>
        </h2>

        <div id="career-slider-container">
          <div id="career-slider" ref={sliderRef}>
            {careerItems.map((item) => (
              <Link
                to="/career"
                key={item.id}
                className="career-slide"
                state={{ selectedJob: item.title }} 
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-row">
            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.employees}
                <span>+</span>
              </h3>
              <p className="stat-label">Employees</p>
            </div>

            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.clients}
                <span>+</span>
              </h3>
              <p className="stat-label">Clients</p>
            </div>

            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.influencers}
                <span>+</span>
              </h3>
              <p className="stat-label">Influencers</p>
            </div>

            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.interns}
                <span>+</span>
              </h3>
              <p className="stat-label">Interns</p>
            </div>

            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.experience}
                <span>+</span>
              </h3>
              <p className="stat-label">Years Of Experience</p>
            </div>

            <div className="stat-item" data-aos="fade-up">
              <h3 className="stat-number">
                {counts.collab}
                <span>+</span>
              </h3>
              <p className="stat-label">Collab Companies</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial-section">
        <div className="container">
          <span id="testimonial-title">TESTIMONIAL</span>
          <h2 id="testimonial-heading">Hear From Our Clients</h2>

          <div id="testimonial-container">
            <div className="testimonial-card">
              <p className="testimonial-text">
                We've had a fantastic experience with Intellisys IT Solutions.
                Their web development services brought our vision to life with
                impressive results. The team was professional, communicative,
                and delivered a top-tier product.
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="testimonial-name">Narendra Gore</div>
                  <div className="testimonial-role">Project Manager</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                Working with Intellisys was a game-changer for our business.
                Their expertise in full stack development helped us launch a
                seamless and efficient web application. Their professionalism
                and support were top-notch throughout the process.
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="testimonial-name">Rohit Shelke</div>
                  <div className="testimonial-role">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                The Android app developed by Intellisys is outstanding! It's
                intuitive, fast, and performs flawlessly across devices. Their
                attention to detail and commitment to quality made the whole
                development process smooth and enjoyable.
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="testimonial-name">TLA</div>
                  <div className="testimonial-role">Founder at Startup Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="form-container max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md my-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Project Proposal
        </h2>
        <form
          id="projectProposalForm"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ID"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Category</option>
            <option value="Website Development">Website Development</option>
            <option value="Application Development">
              Application Development
            </option>
            <option value="Digital Marketing">Digital Marketing/SEO</option>
            <option value="HealthCare">HealthCare</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Cloud">Cloud</option>
            <option value="UIUX">UI/UX</option>
            <option value="fullstackdeveloper">Full Stack Development</option>
            <option value="softwaretesting">Software Testing</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Your Contact Number"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            id="description"
            name="description"
            placeholder="Project Description"
            rows="4"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        {responseMessage && (
          <p
            className={`mt-4 text-center ${
              responseMessage.startsWith("✅")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
