import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          안녕하세요!
          <br />
          저는 <span className="highlight">풀스택 개발자</span>입니다
        </h1>
        <p className="hero-subtitle">
          React와 모던 웹 기술을 활용하여 멋진 웹 경험을 만듭니다
        </p>
        <button
          className="cta-button"
          onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          작품 보기
        </button>
      </div>
    </section>
  );
}
