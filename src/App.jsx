/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Research from "./Components/Research";

import "./styles.css";

const siteProps = {
  name: "Ziqing Guo",
  title: "PhD student at Texas Tech University",
  email: "ziqinguse@gmail.com",
  gitHub: "gzquse",
  instagram: "ziqing_martin/",
  linkedIn: "ziqing-g-993936254/",
  medium: "",
  twitter: "Martinetin_",
  youTube: "",
};
const primaryColor = "#1a1a2e";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Research />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
