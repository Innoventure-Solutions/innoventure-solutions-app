import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./it-services.css";

const ItServices: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Innovatech Solutions - IT Services";
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Modern and responsive websites using latest technologies.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      desc: "Android and iOS applications with smooth performance.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      desc: "Creative and user-friendly interface designs.",
      icon: "🎨",
    },
    {
      title: "Cloud Services",
      desc: "Secure and scalable cloud infrastructure solutions.",
      icon: "☁️",
    },
    {
      title: "Cyber Security",
      desc: "Advanced security systems to protect your business.",
      icon: "🔒",
    },
    {
      title: "Technical Support",
      desc: "24/7 technical assistance and maintenance services.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">
          Empowering Businesses Through Technology
        </h1>

        <p className="hero-subtitle">
          We provide innovative IT solutions including web development,
          mobile apps, cloud services, cybersecurity, and technical support.
        </p>

      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2 className="section-title">Our IT Services</h2>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>⚡ Fast Delivery</h3>
            <p>
              We deliver projects on time with high-quality performance.
            </p>
          </div>

          <div className="why-card">
            <h3>🔐 Secure Solutions</h3>
            <p>
              Your business security and data protection are our priority.
            </p>
          </div>

          <div className="why-card">
            <h3>💡 Modern Technology</h3>
            <p>
              We use latest technologies to build scalable applications.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2 className="section-title">Our Working Process</h2>

        <div className="process-container">
          <div className="process-card">
            <span>1</span>
            <h3>Planning</h3>
            <p>Understanding requirements and project goals.</p>
          </div>

          <div className="process-card">
            <span>2</span>
            <h3>Design</h3>
            <p>Creating modern and user-friendly UI/UX designs.</p>
          </div>

          <div className="process-card">
            <span>3</span>
            <h3>Development</h3>
            <p>Building scalable and efficient digital solutions.</p>
          </div>

          <div className="process-card">
            <span>4</span>
            <h3>Deployment</h3>
            <p>Launching and maintaining the final product.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to Grow Your Business?</h2>

        <p>
          Contact us today and transform your ideas into powerful digital
          solutions.
        </p>

        <button className="cta-btn"
        onClick={() => navigate("/Contact-Us")}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ItServices;