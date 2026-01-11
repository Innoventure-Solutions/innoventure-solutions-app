import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ContactUs from "./Contact-Us/contact.us";
import Services from "./pages/Services/Services";
import "./App.css";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ IMPORTANT

  useEffect(() => {
    // ❌ do not run animation on contact page
    if (showContact) return;

    const canvasEl = document.getElementById(
      "network-canvas"
    ) as HTMLCanvasElement | null;
    if (!canvasEl) return;

    const ctxEl = canvasEl.getContext("2d");
    if (!ctxEl) return;

    // ✅ make TS 100% sure these are not null
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxEl;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      vx = (Math.random() - 0.5) * 2.7;
      vy = (Math.random() - 0.5) * 2.7;
      r = 2;

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        this.draw();
      }
    }

    const particles: Particle[] = [];
    const COUNT = window.innerWidth < 768 ? 35 : 80;
    const MAX_DISTANCE = 130;

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(255,255,255,${
              1 - dist / MAX_DISTANCE
            })`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [showContact, location.pathname]); // ✅ FIX

  if (showContact) {
    return (
      <ContactUs
        title="Contact Us"
        goBack={() => setShowContact(false)}
      />
    );
  }

  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="app">
            <canvas id="network-canvas" />

            <header className="navbar">
              <div className="logo">Innoventure Solutions</div>

              <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen((p) => !p)}
              >
                <span />
                <span />
                <span />
              </div>

              <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <button
                  className="nav-btn"
                  onClick={() => navigate("/services")}
                >
                  Services
                </button>

                <button className="nav-btn">Projects</button>

                <button className="nav-link-btn">Dedicated Team</button>
                <button className="nav-link-btn">Resources</button>
              </nav>

              <div
                className="contact-btn"
                onClick={() => setShowContact(true)}
              >
                <span className="text">CONTACT US</span>
                <span className="icon">📞</span>
              </div>
            </header>

            <div className="hero-content">
              <h1>Hello</h1>
              <h2>Welcome to Innoventure Solutions</h2>
              <p>We build digital products that grow your business</p>
            </div>
          </div>
        }
      />

      {/* SERVICES PAGE */}
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default App;
