import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./devops.css";

const DevOps: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "DevOps Services";
  }, []);

  const devopsServices = [
    {
      icon: "⚙️",
      title: "CI/CD Pipelines",
      desc: "Automated build, testing, and deployment pipelines for faster delivery.",
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud infrastructure management solutions.",
    },
    {
      icon: "🐳",
      title: "Docker & Containers",
      desc: "Containerized applications for efficient deployment and scaling.",
    },
    {
      icon: "🚀",
      title: "Deployment Automation",
      desc: "Automate software deployment and reduce manual work.",
    },
    {
      icon: "📊",
      title: "Monitoring & Logging",
      desc: "Real-time monitoring and performance tracking systems.",
    },
    {
      icon: "🔐",
      title: "Infrastructure Security",
      desc: "Secure DevOps practices and protected cloud environments.",
    },
  ];

  return (
    <div className="devops-page">
      {/* HERO SECTION */}
      <section className="devops-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Modern DevOps <br />
            Solutions
          </h1>

          <p>
            Accelerate software delivery with powerful DevOps automation,
            cloud infrastructure, and scalable deployment solutions.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </button>

        
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <h2 className="section-title">
          DevOps Services
        </h2>

        <div className="services-grid">
          {devopsServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <h2 className="section-title">
          Why DevOps?
        </h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>⚡ Faster Deployment</h3>

            <p>
              Deliver applications quickly with automated deployment systems.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📈 Scalability</h3>

            <p>
              Easily scale applications and infrastructure based on demand.
            </p>
          </div>

          <div className="benefit-card">
            <h3>🔒 Reliability</h3>

            <p>
              Ensure stable and secure systems with continuous monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2 className="section-title">
          Our DevOps Process
        </h2>

        <div className="process-grid">
          <div className="process-card">
            <span>1</span>

            <h3>Planning</h3>

            <p>
              Understanding project requirements and infrastructure needs.
            </p>
          </div>

          <div className="process-card">
            <span>2</span>

            <h3>Automation</h3>

            <p>
              Creating CI/CD pipelines and deployment automation systems.
            </p>
          </div>

          <div className="process-card">
            <span>3</span>

            <h3>Deployment</h3>

            <p>
              Deploying scalable applications on secure cloud environments.
            </p>
          </div>

          <div className="process-card">
            <span>4</span>

            <h3>Monitoring</h3>

            <p>
              Continuous monitoring and performance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Build Faster With DevOps</h2>

        <p>
          Transform your software development lifecycle with modern DevOps
          practices and automation.
        </p>

        <button className="cta-btn"
                onClick={() => navigate("/Contact-Us")}>

          Get Started
        </button>
      </section>
    </div>
  );
};

export default DevOps;