import React, { useState } from "react";
import "./App.css";
import ContactUs from "./Contact-Us/contact.us";

function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="app">

      <section className="hero">
        <div className="stars"></div>

        <header className="navbar">
          <div className="logo">Innoventure Solutions</div>

          <nav className="nav-links">

            <div
              className="dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-btn">Services </button>

              {servicesOpen && (
                <div className="dropdown-content">
                  <a href="Web">Web Development</a>
                  <a href="UI">UI Design</a>
                  <a href="Apps">Mobile Apps</a>
                </div>
              )}
            </div>

            <div
              className="dropdown"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button className="nav-btn">Projects </button>

              {projectsOpen && (
                <div className="dropdown-content">
                  <a href="Projects">Live Projects</a>
                  <a href="Studies">Case Studies</a>
                  <a href="Work">Client Work</a>
                </div>
              )}
            </div>
            

            <a className="nav-link" href="Team">Dedicated Team</a>
            <a className="nav-link" href="Resources">Resources</a>
          </nav>

        </header>

        <div className="hero-content">
          <h1>Hello <br /> Welcome to Innoventure Solutions</h1>

          <p className="hero-subtext">
            WE BUILD DIGITAL PRODUCTS THAT GROW YOUR BUSINESS
          </p>

        </div>
      </section>

      <section className="contact-wrapper">
        <ContactUs title="Contact Us Page" />
      </section>

    </div>
  );
}

export default App;
