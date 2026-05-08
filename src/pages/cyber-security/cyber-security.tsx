import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cyber-security.css";

const CyberSecurity: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cyber Security Services";
  }, []);

  const securityServices = [
    {
      icon: "🛡️",
      title: "Network Security",
      desc: "Protect your systems and networks from cyber threats and attacks.",
    },
    {
      icon: "🔐",
      title: "Data Protection",
      desc: "Secure sensitive business data with advanced encryption systems.",
    },
    {
      icon: "⚠️",
      title: "Threat Monitoring",
      desc: "24/7 monitoring and detection of suspicious activities.",
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      desc: "Secure cloud infrastructure and online business operations.",
    },
    {
      icon: "👨‍💻",
      title: "Ethical Hacking",
      desc: "Identify vulnerabilities before hackers can exploit them.",
    },
    {
      icon: "📱",
      title: "Application Security",
      desc: "Protect web and mobile applications from cyber attacks.",
    },
  ];

  return (
    <div className="cyber-page">
      {/* HERO SECTION */}
      <section className="cyber-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Advanced Cyber Security <br />
            Solutions
          </h1>

          <p>
            Protect your business, systems, and sensitive data with
            enterprise-level cybersecurity solutions and intelligent monitoring.
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
              Explore Security
            </button>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <h2 className="section-title">
          Cyber Security Services
        </h2>

        <div className="services-grid">
          {securityServices.map((service, index) => (
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

      {/* WHY SECURITY */}
      <section className="security-section">
        <h2 className="section-title">
          Why Cyber Security Matters?
        </h2>

        <div className="security-grid">
          <div className="security-card">
            <h3>🔒 Data Safety</h3>

            <p>
              Protect important customer and business information from breaches.
            </p>
          </div>

          <div className="security-card">
            <h3>⚡ Real-Time Monitoring</h3>

            <p>
              Detect threats instantly and prevent security risks quickly.
            </p>
          </div>

          <div className="security-card">
            <h3>🛡️ Business Protection</h3>

            <p>
              Ensure safe online operations and uninterrupted business growth.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <h2 className="section-title">
          Our Security Process
        </h2>

        <div className="process-grid">
          <div className="process-card">
            <span>1</span>

            <h3>Analysis</h3>

            <p>
              Understanding current vulnerabilities and security risks.
            </p>
          </div>

          <div className="process-card">
            <span>2</span>

            <h3>Testing</h3>

            <p>
              Performing security audits and penetration testing.
            </p>
          </div>

          <div className="process-card">
            <span>3</span>

            <h3>Implementation</h3>

            <p>
              Deploying advanced protection and monitoring systems.
            </p>
          </div>

          <div className="process-card">
            <span>4</span>

            <h3>Support</h3>

            <p>
              Continuous monitoring and maintenance for maximum safety.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Secure Your Digital Future</h2>

        <p>
          Stay protected from modern cyber threats with powerful cybersecurity
          solutions.
        </p>

        <button className="cta-btn"
             onClick={() => navigate("/Contact-Us")}>

          Get Protected
        </button>
      </section>
    </div>
  );
};

export default CyberSecurity;