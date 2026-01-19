import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
         <header className="navbar">
              <nav className="logo">
                <NavLink to="/" className="logo navbar-buttons">Innoventure Solutions</NavLink>
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
               <NavLink to="/services" className="nav-btn navbar-buttons">
                  Services
                </NavLink>
                {/* <button
                  className="nav-btn"
                  onClick={() => navigate("/services")}
                >
                  Services
                </button> */}

                <NavLink to="/projects" className="nav-btn navbar-buttons">
                  Projects
                </NavLink>
                {/* <button className="nav-btn">Projects</button> */}

                <NavLink to="/dedicated-team" className="nav-link-btn navbar-buttons">
                  Dedicated Team
                </NavLink>
                <NavLink to="/resources" className="nav-link-btn navbar-buttons">Resources</NavLink>
               



              </nav>
              <nav>

<NavLink to="/contact-us" className="contact-btn navbar-buttons">
                <span className="text">CONTACT US</span>
                <span className="icon">📞</span>
                </NavLink>
              </nav>
              
            </header>
        </>
    )
}