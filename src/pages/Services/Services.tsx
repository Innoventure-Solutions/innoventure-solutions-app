import React, { useEffect } from "react";
import "./Services.css";

const Services: React.FC = () => {
  useEffect(() => {
      document.title = 'Innovatech Solutions - Services';
    }, []);
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Cutting-edge technology solutions designed to drive innovation and growth
      </p>

<div className="services-grid">
          <div className="service-card">
            <div className="service-tag">CORE</div>

            <div className="service-icon">💻</div>

            <h3 className="service-title">IT Services</h3>

            <p className="service-description">Reliable IT infrastructure, system integration, and 
              enterprise-grade support solutions for modern businesses.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
          
          <div className="service-card">
            <div className="service-tag">AI</div>

            <div className="service-icon">🤖</div>

            <h3 className="service-title">AI Automation & Agents</h3>

            <p className="service-description">Intelligent automation, AI agents, and workflow optimization
               to scale operations with precision.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
          
          <div className="service-card">
            <div className="service-tag">SECURITY</div>

            <div className="service-icon">🛡️</div>

            <h3 className="service-title">Cyber Security</h3>

            <p className="service-description">Advanced threat detection, data protection, and security 
              strategies to safeguard digital assets.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
         
          <div className="service-card">
            <div className="service-tag">CLOUD</div>

            <div className="service-icon">⚙️</div>

            <h3 className="service-title">DevOps</h3>

            <p className="service-description">CI/CD pipelines, cloud automation, and infrastructure as code 
              for faster and reliable deployments.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
          
          <div className="service-card">
            <div className="service-tag">WEB3</div>

            <div className="service-icon">⛓️</div>

            <h3 className="service-title">Web3 (Blockchain)</h3>

            <p className="service-description">Decentralized applications, smart contracts, and 
              blockchain-powered digital ecosystems.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
         
          <div className="service-card">
            <div className="service-tag">IOT</div>

            <div className="service-icon">📡</div>

            <h3 className="service-title">IoT Solutions</h3>

            <p className="service-description">Smart device integration, real-time monitoring, 
              and scalable IoT architectures.</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Services;
