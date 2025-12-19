import { useLocation } from "react-router-dom";
import HoverText from "./HoverText";
import "./Footer.css";

const Footer = () => {

  const Location = useLocation();

  if (Location.pathname == '/') {
    return null
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <p className="footer-label">Developing Company</p>

          <a href="#" className="footer-link">
            <div className="d-flex align-items-center gap-2">
              <HoverText text="Dealpoint Merrill" />
              <span className="arrow">↗</span>
            </div>
          </a>

          <div className="social">
            <div className="social-icon">f</div>
          </div>

          <button className="visit-btn">
            <div className="d-flex align-items-center gap-2">
              <span>Schedule a visit</span>
              <span className="arrow">↗</span>
            </div>
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">

          <div className="footer-column">
            <h4>DISCOVER</h4>
            <a href="#"><HoverText text="About us" /></a>
            <a href="#"><HoverText text="Units" /></a>
            <a href="#"><HoverText text="Lifestyle" /></a>
            <a href="#"><HoverText text="Amenities" /></a>
            <a href="#"><HoverText text="Gallery" /></a>
          </div>

          <div className="footer-column">
            <h4>SERVICE</h4>
            <a href="#"><HoverText text="Contact us" /></a>
            <a href="#"><HoverText text="Reservations" /></a>
          </div>

          <div className="footer-column">
            <h4>CONTACT</h4>
            <p>(216) 302-2000</p>
            <p>info@belleoaksmarketplace.com</p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© Belle Oaks</p>
        <div className="footer-bottom-links d-flex gap-4">
          <a href="#"><HoverText text="Privacy Policy" /> ↗</a>
          <a href="#"><HoverText text="Terms of Use" /> ↗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
