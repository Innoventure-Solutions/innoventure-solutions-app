import React, { useEffect } from "react";
import "./Services.css";

const services = [
  {
    title: "IT Services",
    tag: "CORE",
    description:
      "Reliable IT infrastructure, system integration, and enterprise-grade support solutions for modern businesses.",
    icon: "💻",
  },
  {
    title: "AI Automation & Agents",
    tag: "AI",
    description:
      "Intelligent automation, AI agents, and workflow optimization to scale operations with precision.",
    icon: "🤖",
  },
  {
    title: "Cyber Security",
    tag: "SECURITY",
    description:
      "Advanced threat detection, data protection, and security strategies to safeguard digital assets.",
    icon: "🛡️",
  },
  {
    title: "DevOps",
    tag: "CLOUD",
    description:
      "CI/CD pipelines, cloud automation, and infrastructure as code for faster and reliable deployments.",
    icon: "⚙️",
  },
  {
    title: "Web3 (Blockchain)",
    tag: "WEB3",
    description:
      "Decentralized applications, smart contracts, and blockchain-powered digital ecosystems.",
    icon: "⛓️",
  },
  {
    title: "IoT Solutions",
    tag: "IOT",
    description:
      "Smart device integration, real-time monitoring, and scalable IoT architectures.",
    icon: "📡",
  },
];

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
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-tag">{service.tag}</div>

            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <p className="service-description">{service.description}</p>

            <button className="service-btn">
              Learn More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
