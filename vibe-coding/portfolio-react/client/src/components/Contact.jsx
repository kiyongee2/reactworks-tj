import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("폼 데이터:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">연락 주세요</h2>
        <p className="contact-subtitle">
          프로젝트 협업이나 제안이 있으시면 언제든지 연락주세요
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="메시지를 입력하세요"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            전송하기
          </button>

          {isSubmitted && (
            <p className="success-message">
              메시지가 전송되었습니다! 감사합니다.
            </p>
          )}
        </form>

        <div className="social-links">
          <p>또는 소셜 미디어로도 연락할 수 있습니다</p>
          <div className="social-icons">
            <a href="#" className="social-link" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="social-link" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
