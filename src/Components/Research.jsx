/**
 * Research component
 *
 * Highlights research publications and ongoing work.
 */

import React from "react";

const publications = [
  {
    title: "Scaling Quantum Circuit Simulation with HPC",
    authors: "Ziqing Guo, Ziwen Pan, Jan Balewski et al.",
    venue: "arXiv:2504.03967, 2025",
    description:
      "An automation tool for next-generation quantum circuit simulation on HPC clusters, implemented in C++ and Python using Qiskit. Demonstrates scalable simulation of NISQ-era circuits on NERSC supercomputers.",
    url: "https://arxiv.org/abs/2504.03967",
    tags: ["Quantum Computing", "HPC", "NISQ", "Circuit Simulation"],
  },
  {
    title: "Quantum Image Encoding Experiments at NERSC",
    authors: "Ziqing Guo, Jan Balewski et al.",
    venue: "Lawrence Berkeley National Laboratory Technical Report, 2024",
    description:
      "Experimental study of quantum image encoding techniques using NERSC supercomputing resources. Explores amplitude and basis encoding strategies for near-term quantum hardware. Recipient of NERSC AY 2025 Director Reserve Allocation Award.",
    url: "https://github.com/gzquse",
    tags: ["Quantum Image Encoding", "NERSC", "HPC", "LBNL"],
  },
  {
    title: "Biomedical Large Language Models for Clinical Decision Support",
    authors: "Ziqing Guo, Katherine James et al.",
    venue: "Newcastle University, 2022–2023",
    description:
      "Research on fine-tuning and adapting large language models for biomedical text mining, clinical note interpretation, and decision support systems.",
    url: "https://github.com/gzquse",
    tags: ["LLM", "Biomedical AI", "NLP", "Clinical AI"],
  },
];

const Research = () => {
  return (
    <section className="section-alt" id="research">
      <div className="section-container">
        <h2 className="section-heading">Research &amp; Publications</h2>
        <div className="pub-list">
          {publications.map((pub, idx) => (
            <div className="pub-card" key={idx}>
              <div className="pub-number">[{publications.length - idx}]</div>
              <div className="pub-content">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-title"
                >
                  {pub.title}
                </a>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                <p className="small" style={{ marginTop: "0.4rem" }}>
                  {pub.description}
                </p>
                <div className="tags-container" style={{ marginTop: "0.6rem" }}>
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag tag-small">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
