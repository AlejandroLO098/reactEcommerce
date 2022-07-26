import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import("./Footer.css");

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrap">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">About Us</h1>
              <Link className="link" to="/sigin">
                News & Blogs
              </Link>
              <Link className="link" to="/sigin">
                Investors
              </Link>
              <Link className="link" to="/sigin">
                Suppliers
              </Link>
              <Link className="link" to="/sigin">
                Affiliates & Partners
              </Link>
              <Link className="link" to="/sigin">
                Terms of Service
              </Link>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Help</h1>
              <Link className="link" to="/sigin">
                Track Orders
              </Link>
              <Link className="link" to="/sigin">
                Recalls
              </Link>
              <Link className="link" to="/sigin">
                Feedback
              </Link>
              <Link className="link" to="/sigin">
                Team Services
              </Link>
              <Link className="link" to="/sigin">
                Security & Fraud
              </Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Contact Us</h1>
              <Link className="link" to="/sigin">
                Contact
              </Link>
              <Link className="link" to="/sigin">
                Support
              </Link>
              <Link className="link" to="/sigin">
                Destinations
              </Link>
              <Link className="link" to="/sigin">
                Sponsorships
              </Link>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Legal & Privacy</h1>
              <Link className="link" to="/sigin">
                GA Privacy Rights
              </Link>
              <Link className="link" to="/sigin">
                Cookie Preferneces
              </Link>
              <Link className="link" to="/sigin">
                Conditions of Use
              </Link>
              <Link className="link" to="/sigin">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <Link to="/" className="l-link">
              A.B. Games
            </Link>
            <small className="web-rights">
              A.B. Games &copy; {new Date().getFullYear()} All rights reserved.
            </small>
            <div className="social-icons">
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                className="social-icon-links"
                href="https://www.linkedin.com/in/alejandro-lopez001/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
