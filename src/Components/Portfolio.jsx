/**
 * Portfolio component
 *
 * Highlights selected projects and open-source contributions.
 */

import React from "react";

const projectList = [
  {
    title: "Blog Template (This Site)",
    description:
      "Fully automated by GitHub Actions and Copilot, deployed with Azure Static Web Apps, built with React. Includes real-time preview in GitHub Codespaces.",
    url: "https://github.com/gzquse/blog",
    tags: ["React", "Azure", "GitHub Actions"],
  },
  {
    title: "Wolfram Theory Notebook",
    description:
      "Private collection of QKD, quantum image encoding, circuit knitting, QUBO, and QAOA research notes and Mathematica notebooks. Available upon request.",
    url: "https://github.com/gzquse/wolfram_martin",
    tags: ["Mathematica", "Quantum", "Research"],
  },
  {
    title: "Resume / CV Site",
    description:
      "Modern interactive resume deployed with Azure Static Web Apps, created with Overleaf. Reflects experience, skills, and career trajectory.",
    url: "https://resume.ziqguo.com",
    tags: ["LaTeX", "Azure", "CV"],
  },
  {
    title: "Q-Gear: HPC Quantum Simulator",
    description:
      "Automation tool for next-generation quantum circuit simulation on HPC, built with C++ and Python on top of Qiskit. Tailored for the NISQ era.",
    url: "https://github.com/gzquse/Q-Gear",
    tags: ["C++", "Python", "Qiskit", "HPC"],
  },
];

const Portfolio = () => {
  return (
    <section className="section-alt" id="portfolio">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="project-grid">
          {projectList.map((project) => (
            <div className="project-card" key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                {project.title} ↗
              </a>
              <p className="small" style={{ marginTop: "0.6rem", lineHeight: 1.7 }}>
                {project.description}
              </p>
              <div className="tags-container" style={{ marginTop: "0.8rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag-small">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
