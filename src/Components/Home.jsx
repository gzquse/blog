/**
 * Home component
 *
 * The hero section at the top of the page with a two-column layout:
 * profile photo on the left, bio and links on the right.
 */

import React from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/man-with-ring.jpg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import twitterIcon from "../images/socials/twitter.svg";
import envelopeIcon from "../images/socials/envelope.svg";

const researchInterests = [
  "Quantum Computing",
  "Quantum Cryptography",
  "HPC & Simulation",
  "Quantum Image Encoding",
  "Circuit Knitting",
  "NISQ Algorithms",
  "Large Language Models",
  "Agentic Models",
];

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left column: photo + name + links */}
        <div className="hero-left">
          <div className="profile-photo-wrapper">
            <img
              src={profilePhoto}
              alt={`${name} profile`}
              className="profile-photo"
            />
          </div>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-affiliation">
            PhD Student<br />
            Department of Computer Science<br />
            Texas Tech University
          </p>
          <div className="hero-links">
            <a href="https://resume.ziqguo.com" target="_blank" rel="noopener noreferrer" className="cv-button">
              CV / Resume
            </a>
            <div className="hero-socials">
              <a href="mailto:ziqinguse@gmail.com" title="Email">
                <img src={envelopeIcon} alt="email" className="socialIcon" />
              </a>
              <a href="https://github.com/gzquse" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
              </a>
              <a href="https://www.linkedin.com/in/ziqing-g-993936254/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
              </a>
              <a href="https://twitter.com/Martinetin_" target="_blank" rel="noopener noreferrer" title="Twitter">
                <img src={twitterIcon} alt="Twitter" className="socialIcon" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: bio + research interests */}
        <div className="hero-right">
          <h2 className="section-heading">About Me</h2>
          <p style={{ lineHeight: 1.8 }}>
            I am a PhD student in the Department of Computer Science at{" "}
            <strong>Texas Tech University</strong>, advised by Professor Ziwen Pan. My research
            focuses on <strong>quantum computing</strong> and{" "}
            <strong>quantum cryptography</strong>, with an emphasis on near-term quantum
            algorithms and high-performance simulation.
          </p>
          <p style={{ lineHeight: 1.8, marginTop: "1rem" }}>
            Previously, I collaborated with{" "}
            <strong>Jan Balewski at Lawrence Berkeley National Laboratory</strong> on quantum image
            encoding experiments, and with{" "}
            <strong>Prof. Katherine James at Newcastle University</strong> in Biomedical Large
            Language Models. I am a recipient of the{" "}
            <strong>NERSC AY 2025 Director Reserve Allocation Award</strong>.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.75rem", color: "#4E567E" }}>Research Interests</h3>
            <div className="tags-container">
              {researchInterests.map((interest) => (
                <span key={interest} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
