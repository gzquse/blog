/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e8e8e8",
        padding: "0.9rem 2.5rem",
        top: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 10,
      }}
    >
      <a
        href="#home"
        style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "0.02em",
          color: "#1a1a2e",
        }}
      >
        Ziqing Guo
      </a>
      <nav style={{ display: "flex", gap: "2rem" }}>
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#portfolio">Projects</a>
        <a href="#footer">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
