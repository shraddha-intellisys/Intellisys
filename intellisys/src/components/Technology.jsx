import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiFirebase, SiFastapi } from "react-icons/si";
import { SiOracle}  from "react-icons/si";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaPython,
  FaNodeJs,
  FaWindows,
  FaAtlassian,
  FaServer,
  FaDatabase,
  FaLaravel,
  FaMicrosoft,
  FaAws,
  FaCogs,
  FaTasks,
  FaJsSquare,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiSpringboot,
  SiExpress,
  SiDjango,
  SiKubernetes,
  SiSalesforce,
} from "react-icons/si";
import FLUTTERLOGO from "../assestes/FLUTTERLOGO.png";
import "./Technology.css";

const Technology = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="technologies-page">
      {/* Frontend Technologies */}
      <h2 className="section-titletech" style={{ color: "black" }}>
        Frontend Technologies
      </h2>
      <div className="tech-container">
        <div className="tech-card" data-aos="fade-up">
          <FaReact className="tech-icon" />
          <h3>React</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaVuejs className="tech-icon" />
          <h3>Vue.js</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaAngular className="tech-icon" />
          <h3>Angular</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaHtml5 className="tech-icon" />
          <h3>HTML5</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaJs className="tech-icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaCss3Alt className="tech-icon" />
          <h3>CSS</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaBootstrap className="tech-icon" />
          <h3>Bootstrap</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiNextdotjs className="tech-icon" />
          <h3>Next.js</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaJsSquare className="tech-icon" />
          <h3>jQuery</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaReact className="tech-icon" />
          <h3>React Native</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <img src={FLUTTERLOGO} alt="Flutter Logo" className="flutter-icon" />
          <h3>Flutter</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaWordpress className="tech-icon" />
          <h3>WordPress</h3>
        </div>
      </div>

      {/* Backend Technologies */}
      <h2 className="section-titletech" style={{ color: "black" }}>
        Backend Technologies
      </h2>
      <div className="tech-container">
        <div className="tech-card" data-aos="fade-up">
          <FaNodeJs className="tech-icon" />
          <h3>Node.js</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaPhp className="tech-icon" />
          <h3>PHP</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaJava className="tech-icon" />
          <h3>Java</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaPython className="tech-icon" />
          <h3>Python</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaDatabase className="tech-icon" />
          <h3>MongoDB</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaWindows className="tech-icon" />
          <h3>.NET</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaAtlassian className="tech-icon" />
          <h3>Jira</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaServer className="tech-icon" />
          <h3>Apache</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiNestjs className="tech-icon" />
          <h3>NestJS</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiSpringboot className="tech-icon" />
          <h3>Spring Boot</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaDatabase className="tech-icon" />
          <h3>MySQL</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaLaravel className="tech-icon" />
          <h3>Laravel</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiExpress className="tech-icon" />
          <h3>Express.js</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiDjango className="tech-icon" />
          <h3>Django</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiFirebase className="tech-icon" />
          <h3>Firebase</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiFastapi className="tech-icon" />
          <h3>FastAPI</h3>
        </div>
      </div>

      {/* Cloud Services */}
      <h2 className="section-titletech" style={{ color: "black" }}>
        Cloud Services
      </h2>
      <div className="tech-container">
        <div className="tech-card" data-aos="fade-up">
          <FaMicrosoft className="tech-icon" />
          <h3>Microsoft Azure</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaAws className="tech-icon" />
          <h3>AWS</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiGooglecloud  className="tech-icon" />
          <h3>Google Cloud</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiSalesforce className="tech-icon" />
          <h3>Salesforce</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiKubernetes className="tech-icon" />
          <h3>Kubernetes</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaCogs className="tech-icon" />
          <h3>VMware</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <FaTasks className="tech-icon" />
          <h3>Jira</h3>
        </div>
        <div className="tech-card" data-aos="fade-up">
          <SiOracle className="tech-icon"/>
          <h3>Oracle Cloud</h3>
        </div>
      </div>
    </div>
  );
};

export default Technology;
