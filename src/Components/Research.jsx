/**
 * Research component
 *
 * Highlights research publications and ongoing work.
 */

import React from "react";
import pubDealZne from "../images/pub-deal-zne.svg";
import pubQuantumCircuit from "../images/pub-quantum-circuit.svg";
import pubQuantumEncoding from "../images/pub-quantum-encoding.svg";
import pubQpie from "../images/pub-qpie.svg";

/**
 * Publication images are hand-crafted SVG illustrations that visually
 * summarize each paper's core idea. They are not generated from data;
 * instead they were designed as schematic diagrams using standard SVG
 * markup (see src/images/pub-*.svg).
 */
const publications = [
  {
    title:
      "Direct Entanglement Ansatz Learning (DEAL) with ZNE on Error-Prone Superconducting Qubits",
    authors: "Z. Guo, Z. Pan et al.",
    venue: "2025 IEEE International Conference on Quantum Computing and Engineering (QCE)",
    description:
      "Proposes DEAL, a direct entanglement ansatz learning method combined with zero-noise extrapolation (ZNE) for error mitigation on noisy superconducting quantum processors.",
    url: "https://github.com/gzquse",
    tags: ["Quantum Computing", "Error Mitigation", "ZNE", "IEEE QCE"],
    image: pubDealZne,
    imageAlt:
      "Noisy quantum circuit processed through ZNE extrapolation to produce mitigated high-fidelity results",
  },
  {
    title: "Q-GEAR: Improving Quantum Simulation Framework",
    authors: "Z. Guo, Z. Pan, J. Balewski et al.",
    venue: "ICPP '25: 54th International Conference on Parallel Processing",
    description:
      "An automation tool for next-generation quantum circuit simulation on HPC clusters, implemented in C++ and Python using Qiskit. Demonstrates scalable simulation of NISQ-era circuits on NERSC supercomputers.",
    url: "https://dl.acm.org/doi/pdf/10.1145/3754598.3754608",
    tags: ["Quantum Computing", "HPC", "NISQ", "Circuit Simulation"],
    image: pubQuantumCircuit,
    imageAlt: "Quantum circuit diagram with H, CNOT and Rz gates across 4 qubits simulated on HPC",
  },
  {
    title: "Vectorized Attention with Learnable Encoding for Quantum Transformer",
    authors: "Z. Guo, Z. Pan, A. Khan, J. Balewski",
    venue: "Proceedings of the AAAI Symposium Series 7",
    description:
      "Introduces vectorized attention mechanisms with learnable encoding strategies for quantum transformers, bridging classical attention architectures and quantum circuit design.",
    url: "https://github.com/gzquse",
    tags: ["Quantum Transformer", "Attention", "AAAI", "Encoding"],
    image: pubQuantumEncoding,
    imageAlt: "Classical pixel grid encoded into quantum amplitude states and reconstructed",
  },
  {
    title: "Quantum Parallel Information Exchange (QPIE) Hybrid Network with Transfer Learning",
    authors: "Z. Guo et al.",
    venue: "Quantum Science and Technology 10 (3), 035054",
    description:
      "Presents the QPIE hybrid quantum-classical network that leverages transfer learning for efficient quantum information exchange across hybrid architectures.",
    url: "https://github.com/gzquse",
    tags: ["QPIE", "Transfer Learning", "Hybrid Network", "QST"],
    image: pubQpie,
    imageAlt:
      "Quantum encoder feeding into a hybrid classical-quantum network with transfer learning",
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
                  aria-label={`${pub.title} (opens in new tab)`}
                >
                  {pub.title}
                </a>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-figure-link"
                  aria-label={`View paper: ${pub.title} (opens in new tab)`}
                >
                  <img src={pub.image} alt={pub.imageAlt} className="pub-figure" />
                </a>
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
