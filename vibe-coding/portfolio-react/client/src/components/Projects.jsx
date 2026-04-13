import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "React와 Vite를 활용한 모던한 포트폴리오 사이트",
      tech: ["React", "Vite", "CSS3"],
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Todo 애플리케이션",
      description: "효율적인 작업 관리를 위한 대시보드 앱",
      tech: ["React", "JavaScript", "LocalStorage"],
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #44b8aa 100%)",
      icon: "✓",
    },
    {
      id: 3,
      title: "API 통합 프로젝트",
      description: "실시간 데이터를 처리하는 풀스택 애플리케이션",
      tech: ["React", "Node.js", "REST API"],
      color: "#95e1d3",
      gradient: "linear-gradient(135deg, #95e1d3 0%, #7dd4bf 100%)",
      icon: "⚡",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">내 작품</h2>
        <p className="projects-subtitle">
          최근에 진행한 프로젝트들을 소개합니다
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{ "--card-color": project.color }}
            >
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="project-link">자세히 보기</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
