import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Facebook } from "lucide-react";
import HoverText from "./HoverText";
import "./Menu.css";
// Assuming you might want to use the city image or similar for the '3D Map' preview
// import cityParams from "../assets/city-image.jpg" // Example if needed, or use a placeholder div style

import { createPortal } from "react-dom";

const Menu = ({ isOpen, onClose }) => {
  const location = useLocation();
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu-overlay"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="menu-container w-100 d-flex flex-column justify-content-between">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center w-100 pt-4 px-5 pb-3 border-bottom border-white-10">
              <div className="text-white">
                <div className="fw-bold h5 mb-0" style={{ letterSpacing: '2px' }}>BELLE OAKS</div>
                <div className="small text-white-50" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>MARKETPLACE</div>
              </div>

              <button className="close-btn" onClick={onClose}>
                <X color="#111" size={24} />
              </button>
            </div>

            {/* Main Content Body */}
            <div className="d-flex w-100">
              <div className="d-flex w-100 h-100 position-relative justify-content-between align-items-center">

                {/* Left: Navigation Links */}
                <div className="d-flex w-100 flex-column justify-content-center" style={{ gap: '2rem', zIndex: 2 }}>
                  {['Home', 'Amenities', 'About us', 'Gallery', 'Lifestyle', 'Units', 'Contact'].map((item) => {
                    const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                    const isActive = location.pathname === path;

                    return (
                      <Link
                        to={path}
                        key={item}
                        className="menu-link text-white text-decoration-none display-4 position-relative"
                        onClick={onClose}
                      >
                        {isActive && <span className="nav-dot"></span>}
                        <HoverText text={item} />
                      </Link>
                    );
                  })}
                </div>

                {/* Right Side: Links & 3D Map Card */}
                <div className="d-flex flex-column align-items-end justify-content-end h-100 pb-5" style={{ zIndex: 1, gap: '1rem' }}>

                  {/* Terms Links */}
                  {/* <div className="d-flex gap-4 text-white-50 small align-items-center">
                    <a href="#" className="text-white-50 text-decoration-none">Terms of Use ↗</a>
                    <a href="#" className="text-white-50 text-decoration-none">Privacy Policy ↗</a>
                    <span>Copyright © 2025</span>
                  </div> */}

                  {/* 3D Map Card */}
                  {/* <div className="d-none d-lg-block rounded-4 overflow-hidden position-relative" style={{ width: '400px', height: '250px', border: '4px solid rgba(255,255,255,0.1)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
                      alt="3D Map"
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="position-absolute bottom-0 w-100 p-3 text-center text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                      <span className="h4 font-serif fst-italic">3D Map</span>
                    </div>
                  </div> */}

                </div>

              </div>
            </div>

            {/* Footer Socals */}
            <div className="p-4 px-5">
              <a href="#" className="text-white-50 hover-white">
                <div className="bg-white-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)' }}>
                  <Facebook size={18} color="white" />
                </div>
              </a>
            </div>
            <div className="d-flex justify-content-center gap-4 text-white-50 small align-items-center pb-5">
              <a href="#" className="text-white-50 text-decoration-none">Terms of Use ↗</a>
              <a href="#" className="text-white-50 text-decoration-none">Privacy Policy ↗</a>
              <span>Copyright © 2025</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Menu;
