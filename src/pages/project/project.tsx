import React, {useEffect } from "react";
import "./project.css";

const Projects: React.FC = () => {
useEffect(() => {
        document.title = 'Innovatech Solutions - projects';
      }, []);
  return (
     <div className="projects-page">
      <h1 className="projects-title">Our projects</h1>
      <p  className="projects-subtitle">
        A showcase of our work,ideas,and innovetion</p>

<div className="projects-grid">
  <div className="project-card">
    <div className="project-tag">Ecom Bot (WhatsApp Bot)</div>
     
    <div className="project-icons">🛒</div>

    <h3 className="project-title">IT projects</h3>
    <p className="project-description">Your ecommerce store inside WhatsApp,
       where customers can browse, order, and track seamlessly.</p>
    <button className="project-btn">
      learn More <span>→</span>
    </button>
  </div>
  <div className="project-card">
    <div className="project-tag">Ecommerce Application (Web App)</div>
     
    <div className="project-icons">🌐</div>

    <h3 className="project-title">IT projects</h3>
    <p className="project-description">A complete web platform to manage, sell, and scale your online store effortlessly</p>
    <button className="project-btn">
      learn More <span>→</span>
    </button>
  </div>
  <div className="project-card">
    <div className="project-tag">Smart Insights (Productivity Tool)</div>
     
    <div className="project-icons">📊</div>

    <h3 className="project-title">IT projects</h3>
    <p className="project-description">Transform your data into clear insights to boost
       productivity and make smarter decisions
    </p>
    <button className="project-btn">
      learn More <span>→</span>
    </button>
  </div>
</div>
     </div>
  );
};

export default Projects;
