import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div className="print:hidden">
      <footer className="container mx-auto footer p-10 text-neutral-content">
        <div className="footer-color-text">
          <span className="footer-title">Categories</span>
          <Link to="/" className="link link-hover">
            Graphics & Design
          </Link>
          <Link to="/" className="link link-hover">
            Digital Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Writing & Translation
          </Link>
          <Link to="/" className="link link-hover">
            Video & Animation
          </Link>
          <Link to="/" className="link link-hover">
            Music & Audio
          </Link>
          <Link to="/" className="link link-hover">
            Programming & Tech
          </Link>
          <Link to="/" className="link link-hover">
            Data
          </Link>
          <Link to="/" className="link link-hover">
            Business
          </Link>
          <Link to="/" className="link link-hover">
            LifeStyle
          </Link>
          <Link to="/" className="link link-hover">
            Photography
          </Link>
          <Link to="/" className="link link-hover">
            Sitemap
          </Link>
        </div>
        <div className="footer-color-text">
          <span className="footer-title">About</span>
          <Link to="/" className="link link-hover">
            Careers
          </Link>
          <Link to="/" className="link link-hover">
            Press & News
          </Link>
          <Link to="/" className="link link-hover">
            Partnerships
          </Link>
          <Link to="/" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/" className="link link-hover">
            Terms of Service
          </Link>
          <Link to="/" className="link link-hover">
            Intellectual Property Claims
          </Link>
          <Link to="/" className="link link-hover">
            Investor Relations
          </Link>
        </div>
        <div className="footer-color-text">
          <span className="footer-title">Support</span>
          <Link to="/" className="link link-hover">
            Help & Support
          </Link>
          <Link to="/" className="link link-hover">
            Trust & Safety
          </Link>
          <Link to="/" className="link link-hover">
            Selling on DevHive
          </Link>
          <Link to="/" className="link link-hover">
            Buying on DevHive
          </Link>
        </div>
        <div className="footer-color-text">
          <span className="footer-title">Community</span>
          <Link to="/" className="link link-hover">
            Customer Success Stories
          </Link>
          <Link to="/" className="link link-hover">
            Community Hub
          </Link>
          <Link to="/" className="link link-hover">
            Forum{" "}
          </Link>
          <Link to="/" className="link link-hover">
            Events{" "}
          </Link>
          <Link to="/" className="link link-hover">
            Blog{" "}
          </Link>
          <Link to="/" className="link link-hover">
            Influencers
          </Link>
          <Link to="/" className="link link-hover">
            Affiliates
          </Link>
          <Link to="/" className="link link-hover">
            Podcast
          </Link>
          <Link to="/" className="link link-hover">
            Invite a Friend
          </Link>
          <Link to="/" className="link link-hover">
            Become a Seller
          </Link>
          <Link to="/" className="link link-hover">
            Community Standards
          </Link>
        </div>
        <div className="footer-color-text">
          <span className="footer-title">More From DevHiver</span>
          <Link to="/" className="link link-hover">
            DevHive Business
          </Link>
          <Link to="/" className="link link-hover">
            DevHive Pro
          </Link>
          <Link to="/" className="link link-hover">
            DevHive Logo Maker
          </Link>
          <Link to="/" className="link link-hover">
            DevHive Guides
          </Link>
          <Link to="/" className="link link-hover">
            Get Inspired
          </Link>
          <Link to="/" className="link link-hover">
            DevHiver Select
          </Link>
          <Link to="/" className="link link-hover">
            ClearVoice
          </Link>
          <Link to="/" className="link link-hover">
            DevHive Workspace
          </Link>
          <Link to="/" className="link link-hover">
            Learn
          </Link>
          <Link to="/" className="link link-hover">
            Working Not Working
          </Link>
        </div>
      </footer>
      <Social></Social>
    </div>
  );
};

export default Footer;
