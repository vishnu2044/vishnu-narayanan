import React from 'react';
import "./header.css";
import ME from "../../assets/first_profile_pic.webp";
import resume from '../../assets/Vishnu_Narayanan_Resume.pdf';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header id="header">
      {/* Background Effects */}
      <div className="header__bg-grid"></div>
      <div className="header__glow header__glow--1"></div>
      <div className="header__glow header__glow--2"></div>

      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <div className="header__badge">
              <span className="header__badge-dot"></span>
              <BiCodeAlt />
              <span>SOFTWARE ENGINEER • THE WEB</span>
            </div>

            <h1 className="header__title">
              <span className="header__title-line">Vishnu</span>
              <span className="header__title-line gradient-text">Narayanan</span>
            </h1>

            <p className="header__subtitle">
              Software Engineer crafting high-performance, precision-engineered 
              digital experiences. Specializing in scalable architecture and sophisticated 
              user interfaces.
            </p>

            <div className="header__cta">
              <a href="#portfolio" className="btn btn--primary">
                View My Work
                <FiArrowDown />
              </a>
              <a href={resume} download className="btn btn--outline">
                <FiDownload />
                Download CV
              </a>
            </div>

            <div className="header__bottom-row">
              <div className="header__socials">
                <a href="https://www.linkedin.com/in/vishnu-narayanan2044/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <BsLinkedin />
                </a>
                <a href="https://github.com/vishnu2044" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <BsGithub />
                </a>
              </div>

              <div className="header__stacks">
                <div className="header__stack-badges">
                  <span className="header__stack-badge header__stack-badge--py">PY</span>
                  <span className="header__stack-badge header__stack-badge--dj">DJ</span>
                  <span className="header__stack-badge header__stack-badge--re">RE</span>
                </div>
                <span className="header__stacks-label">Stacks for 2025</span>
              </div>
            </div>
          </div>

          <div className="header__image-wrapper">
            {/* Experience Badge */}
            <div className="header__exp-badge">
              <span className="header__exp-value">2+</span>
              <span className="header__exp-label">YEARS EXP</span>
            </div>

            {/* Image Card */}
            <div className="header__image-card">
              <div className="header__image">
                <img src={ME} alt="Vishnu Narayanan — Full Stack Developer" />
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="header__image-dots"></div>
          </div>
        </div>

        <a href="#about" className="header__scroll-indicator">
          <span className="header__scroll-text">SCROLL</span>
          <span className="header__scroll-line"></span>
        </a>
      </div>
    </header>
  );
};

export default Header;