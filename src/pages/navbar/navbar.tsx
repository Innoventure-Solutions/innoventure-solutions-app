import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {to:"/services", label:"Services", className:"nav-btn navbar-buttons"},
    {to:"/projects", label:"Projects", className:"nav-btn navbar-buttons"},
    {to:"/dedicated-team", label:"Dedicated Team", className:"nav-link-btn navbar-buttons"},
    {to:"/resources", label:"Resources", className:"nav-link-btn navbar-buttons"}
  ];

  // 👇 Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      
      <nav className="logo">
        <NavLink to="/" className="logo navbar-buttons">
          Innoventure Solutions
        </NavLink>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((p) => !p)}
      >
        <span />
        <span />
        <span />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={item.className}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <nav>
        <NavLink
          to="/contact-us"
          className="contact-btn navbar-buttons"
        >
          <span className="text">CONTACT US</span>
          <span className="icon">📞</span>
        </NavLink>
      </nav>
    </header>
  );
};