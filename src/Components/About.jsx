/**
 * About component
 *
 * Education and experience section.
 */

import React from "react";

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Texas Tech University",
    period: "2023 – Present",
    detail: "Advisor: Prof. Ziwen Pan · Research: Quantum Computing & Quantum Cryptography",
  },
  {
    degree: "B.S. in Computer Science & Mathematics",
    institution: "Texas Tech University",
    period: "2019 – 2023",
    detail: "Graduated with honors",
  },
];

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Texas Tech University – Pan Quantum Lab",
    period: "2023 – Present",
    detail:
      "Developing quantum algorithms for NISQ devices, circuit knitting techniques, and QUBO/QAOA formulations.",
  },
  {
    role: "Research Intern",
    org: "Lawrence Berkeley National Laboratory (NERSC)",
    period: "2022 – 2023",
    detail:
      "Worked with Jan Balewski on quantum image encoding experiments. Awarded NERSC AY 2025 Director Reserve Allocation.",
  },
  {
    role: "Research Collaborator",
    org: "Newcastle University",
    period: "2022",
    detail:
      "Collaborated with Prof. Katherine James on Biomedical Large Language Model research.",
  },
];

const About = () => {
  return (
    <section className="section-white" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* Education */}
          <div>
            <h2 className="section-heading">Education</h2>
            <div className="timeline">
              {education.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
                      {item.degree}
                    </h3>
                    <p className="small" style={{ margin: "0.15rem 0", color: "#4E567E", fontWeight: 500 }}>
                      {item.institution}
                    </p>
                    <p className="small" style={{ margin: 0, color: "#888" }}>
                      {item.period}
                    </p>
                    <p className="small" style={{ marginTop: "0.3rem" }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="section-heading">Experience</h2>
            <div className="timeline">
              {experience.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
                      {item.role}
                    </h3>
                    <p className="small" style={{ margin: "0.15rem 0", color: "#4E567E", fontWeight: 500 }}>
                      {item.org}
                    </p>
                    <p className="small" style={{ margin: 0, color: "#888" }}>
                      {item.period}
                    </p>
                    <p className="small" style={{ marginTop: "0.3rem" }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
