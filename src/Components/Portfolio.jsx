/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workspace.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Feel free to copy my blog template",
    description:
      "The blog is fully automated by GitHub devops action and copilot deployed with Azure Static Web Apps built with React. The cool thing is that you do not need to worry about the development environment because Github feature riched code space help you boost your productivity in the cloud and you can review your page in the browser with real time preview spanning only within 8ms.",
    url: "https://github.com/gzquse/blog",
  },
  {
    title: "My Wolfram Theory Notebook",
    description:
      "Please note that this is the private work; the access based upon the request. The notebook is a collection of my QKD, quantum image encoding, circuit knitting, QUBO, QAOA research, and all the preliminaries. If you are interested in the content, please feel free to contact me. I will be happy to share it with you.",
    url: "https://github.com/gzquse/wolfram_martin",
  },
  {
    title: "My Resume Site",
    description:
      "Created from overleaf resume workshop and deployed by Azure static web app, including my experience, personality, and capability. A morndernized resume is not only reflect your experience but your whole targeted career path.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Scaling quantum circuit simulation with HPC",
    description:
      "The automation tool for the next generation quantum circuit simulation on HPC. The tool is built with C++ and Python, and the simulation is based on the Qiskit. More importantly, the tool is good for NISQ era. Paper: https://arxiv.org/abs/2504.03967",
    url: "https://github.com/gzquse/Q-Gear",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
