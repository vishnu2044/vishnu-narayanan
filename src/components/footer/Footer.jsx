import React from 'react';
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiCode, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <a href="#header" className="footer__logo">
            <span className="footer__logo-symbol">&lt;</span>
            VN
            <span className="footer__logo-symbol"> /&gt;</span>
          </a>

          <div className="footer__socials">
            <span className="footer__socials-label">CONNECT WITH ME</span>
            <div className="footer__social-links">
              <a href="https://www.linkedin.com/in/vishnu-narayanan2044/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BsLinkedin />
              </a>
              <a href="https://github.com/vishnu2044" target="_blank" rel="noreferrer" aria-label="GitHub">
                <BsGithub />
              </a>
              <a href="mailto:vishnunarayanan2044@gmail.com" aria-label="Email">
                <FiCode />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Vishnu Narayanan. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;