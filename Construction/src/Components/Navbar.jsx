import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img_1.webp"; // Ensure this path is correct based on original file
import Menu from "./Menu";
import HoverText from "./HoverText";
import { ChevronDown, Map, List, Menu as MenuIcon } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Left: Status Indicator */}
          <div className="navbar-left">
            <div className="status-indicator">
              <span className="dots">......</span>
              <span className="status-text">OFF</span>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="navbar-center">
            <Link to="/">
              <img src={logo} alt="Belle Oaks Marketplace" style={{ height: '40px', objectFit: 'contain' }} />
            </Link>
          </div>

          {/* Right: Navigation */}
          <div className="navbar-right">
            <div className="d-flex align-items-center gap-3">

              {/* Apartments Dropdown */}
              <div
                className="dropdown-wrapper"
              >
                <button
                  className={`dropdown-btn ${dropdownOpen ? "active" : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <HoverText text="Apartments" />
                  <ChevronDown
                    size={16}
                    className={`ms-2 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Content */}
                <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <div className="d-flex gap-4">
                    {/* Visual Selection */}
                    <div className="selection-card">
                      <Link to="/Units" className="d-flex align-items-center justify-content-between w-100 gap-3 text-decoration-none text-dark">
                        <div className="text-start">
                          <div className="fw-bold"><HoverText text="Visual" /></div>
                          <div className="font-serif fst-italic text-secondary"><HoverText text="Selection" /></div>
                        </div>
                        <div className="icon-circle">
                          <Map size={20} />
                        </div>
                      </Link>
                    </div>

                    {/* List Selection */}
                    <div className="selection-card">
                      <Link to="/buildings" className="d-flex align-items-center justify-content-between w-100 gap-3 text-decoration-none text-dark">
                        <div className="text-start">
                          <div className="fw-bold"><HoverText text="List" /></div>
                          <div className="font-serif fst-italic text-secondary"><HoverText text="Selection" /></div>
                        </div>
                        <div className="icon-circle">
                          <List size={20} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Button */}
              <button
                className="menu-btn d-flex align-items-center gap-2"
                onClick={() => setMenuOpen(true)}
              >
                <div className="d-none d-lg-block">
                  <HoverText text="Menu" />
                </div>
                <MenuIcon size={18} />
              </button>

            </div>
          </div>

        </div>
      </nav>

      {/* MENU OVERLAY */}
      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
