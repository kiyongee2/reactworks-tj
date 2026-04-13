import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">Portfolio</span>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("hero")}>
            홈
          </a>
          <a href="#projects" onClick={() => scrollToSection("projects")}>
            프로젝트
          </a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            연락처
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
