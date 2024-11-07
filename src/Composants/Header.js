import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  // State to manage the open/close state of the navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="link">
          <img className="logo" src="/nexar.png" alt="Your Logo" />
        </a>
        {/* Hamburger button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          {/* Change icon based on the state */}
          {isNavOpen ? (
            <span style={{ marginLeft: '5px' }}><i style={{ width: '40px'}} className="fas fa-times"></i></span>
          ) : (
          <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
                onClick={toggleNavbar} // Close menu on link click
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
                onClick={toggleNavbar} // Close menu on link click
              >
                À Propos de Nous
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/offer"
                onClick={toggleNavbar} // Close menu on link click
              >
                Offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
                onClick={toggleNavbar} // Close menu on link click
              >
                Contactez-Nous
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
