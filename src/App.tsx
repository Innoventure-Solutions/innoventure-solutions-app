import React, { useEffect, useState } from "react";
import "./App.css";
import ContactUs from "./Contact-Us/contact.us";

const App: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const canvasEl = document.getElementById(
      "network-canvas"
    ) as HTMLCanvasElement | null;

    if (!canvasEl) return;

    const ctxEl = canvasEl.getContext("2d");
    if (!ctxEl) return;

    const c: HTMLCanvasElement = canvasEl;
    const context: CanvasRenderingContext2D = ctxEl;

    const resize = (): void => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;

      constructor() {
        this.x = Math.random() * c.width;
        this.y = Math.random() * c.height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.r = 2;
      }

      draw(): void {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.fillStyle = "rgba(255,255,255,0.9)";
        context.fill();
      }

      update(): void {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= c.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= c.height) this.vy *= -1;

        this.draw();
      }
    }

    const particles: Particle[] = [];
    const COUNT: number = window.innerWidth < 768 ? 35 : 80;
    const MAX_DISTANCE: number = 130;

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    const connectParticles = (): void => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            context.strokeStyle = `rgba(255,255,255,${
              1 - dist / MAX_DISTANCE
            })`;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    };

    let animationId: number;

    const animate = (): void => {
      context.clearRect(0, 0, c.width, c.height);
      particles.forEach((p) => p.update());
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="app">
      <canvas id="network-canvas"></canvas>

      <header className="navbar">
        <div className="logo">Innoventure Solutions</div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="dropdown">
            <button
              type="button"
              className="nav-btn"
              onClick={() => setServicesOpen((p) => !p)}
            >
              Services
            </button>

            {servicesOpen && (
              <div className="dropdown-content">
                <a href="/web">Web Development</a>
                <a href="/ui">UI / UX Design</a>
                <a href="/apps">Mobile Apps</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button
              type="button"
              className="nav-btn"
              onClick={() => setProjectsOpen((p) => !p)}
            >
              Projects
            </button>

            {projectsOpen && (
              <div className="dropdown-content">
                <a href="/live">Live Projects</a>
                <a href="/case">Case Studies</a>
                <a href="/clients">Client Work</a>
              </div>
            )}
          </div>

          <a className="nav-link" href="/team">
            Dedicated Team
          </a>
          <a className="nav-link" href="/resources">
            Resources
          </a>
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
};

export default App;
