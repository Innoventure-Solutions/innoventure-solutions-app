import React, { useEffect, useState } from "react";
import "./App.css";
import ContactUs from "./Contact-Us/contact.us";

function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const canvasEl = document.getElementById(
      "network-canvas"
    ) as HTMLCanvasElement | null;

    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const canvas = canvasEl;
    const context = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 80;
    const MAX_DISTANCE = 130;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = 2;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255,255,255,0.9)";
        context.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        this.draw();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            context.strokeStyle = `rgba(255,255,255,${
              1 - distance / MAX_DISTANCE
            })`;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="app">
      <canvas id="network-canvas"></canvas>

      <header className="navbar">
        <div className="logo">Innoventure Solutions</div>

        <nav className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-btn">Services</button>

            {servicesOpen && (
              <div className="dropdown-content">
                <a href="/web">Web Development</a>
                <a href="/ui">UI / UX Design</a>
                <a href="/apps">Mobile Apps</a>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button className="nav-btn">Projects</button>

            {projectsOpen && (
              <div className="dropdown-content">
                <a href="/live">Live Projects</a>
                <a href="/case">Case Studies</a>
                <a href="/clients">Client Work</a>
              </div>
            )}
          </div>

          <a className="nav-link" href="/team">Dedicated Team</a>
          <a className="nav-link" href="/resources">Resources</a>
        </nav>

              </header>

      <div className="hero-content">
        <h1>Hello</h1>
        <h2>Welcome to Innoventure Solutions</h2>
        <p>We build digital products that grow your business</p>
      </div>

      <section className="contact-wrapper">
        <ContactUs title="Contact Us Page" />
      </section>
    </div>
  );
}

export default App;
