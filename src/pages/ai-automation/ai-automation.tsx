import React, { useEffect } from "react";

import "./ai-automation.css";

const AiAutomation: React.FC = () => {

  useEffect(() => {
    document.title = "AI Automation Services";
  }, []);

  const services = [
    {
      icon: "🤖",
      title: "AI Chatbots",
      desc: "Smart AI chatbots for customer support and automation.",
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      desc: "Automate repetitive business tasks and save time.",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      desc: "AI-powered insights and business intelligence solutions.",
    },
    {
      icon: "🎯",
      title: "Marketing Automation",
      desc: "Automated campaigns, email systems, and lead generation.",
    },
    {
      icon: "🔐",
      title: "AI Security",
      desc: "Advanced AI systems for monitoring and cybersecurity.",
    },
    {
      icon: "☁️",
      title: "Cloud AI Solutions",
      desc: "Scalable cloud-based AI infrastructure and services.",
    },
  ];

  return (
    <div className="ai-page">
      {/* HERO SECTION */}
      <section className="ai-hero">
        <div className="hero-content">
          <h1>
            Smart AI Automation <br />
            For Modern Businesses
          </h1>

          <p>
            We build intelligent AI automation systems that improve
            productivity, reduce manual work, and help businesses grow faster.
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

      {/* SERVICES */}
      <section className="services-section" id="services">
        <h2 className="section-title">AI Automation Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <h2 className="section-title">
          Why AI Automation?
        </h2>

        <div className="benefits-container">
          <div className="benefit-card">
            <h3>🚀 Faster Workflow</h3>

            <p>
              Reduce manual tasks and improve business efficiency.
            </p>
          </div>

          <div className="benefit-card">
            <h3>💰 Cost Saving</h3>

            <p>
              Automating repetitive work saves time and operational costs.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📈 Better Productivity</h3>

            <p>
              AI tools help teams focus on important tasks and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <h2 className="section-title">Our AI Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>1</span>
            <h3>Research</h3>
            <p>Understanding your business needs and workflows.</p>
          </div>

          <div className="process-card">
            <span>2</span>
            <h3>Development</h3>
            <p>Building smart AI systems tailored to your business.</p>
          </div>

          <div className="process-card">
            <span>3</span>
            <h3>Integration</h3>
            <p>Connecting AI tools with your existing platforms.</p>
          </div>

          <div className="process-card">
            <span>4</span>
            <h3>Optimization</h3>
            <p>Continuous improvement for better performance.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Transform Your Business With AI</h2>

        <p>
          Start automating your workflows with intelligent AI solutions today.
        </p>

        
            <button className="secondary-btn">
              Contact Us
            </button>
      </section>
    </div>
  );
};

export default AiAutomation;