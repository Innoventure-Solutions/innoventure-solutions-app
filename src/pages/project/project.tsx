import React from "react";
import "./project.css";
const Projects: React.FC = () => {
  return (
    <div className="project-page">
      <div className="project-grid">
        <div className="project-card">
          <div className="project-image">
            <img alt="img" className="img" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Project</h3>
            <p className="project-description">Description of project</p>
            <button className="project-btn">Read More...</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img alt="img" className="img" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Project</h3>
            <p className="project-description">Description of project</p>
            <button className="project-btn">Read More...</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img alt="img" className="img" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Project</h3>
            <p className="project-description">Description of project</p>
            <button className="project-btn">Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
