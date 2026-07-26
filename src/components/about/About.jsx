import React from 'react';
import "./about.css";
import ME from "../../assets/profile_pic_02.jpeg";
import { FiAward, FiFolder, FiClock } from "react-icons/fi";

const About = () => {
  const stats = [
    { icon: <FiAward />, value: "2+", label: "Years Experience" },
    { icon: <FiFolder />, value: "10+", label: "Projects Completed" },
    { icon: <FiClock />, value: "24/7", label: "Available" },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about__container">
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <div className="about__image-accent"></div>
              <div className="about__image">
                <img src={ME} alt="Vishnu Narayanan" />
              </div>
            </div>
          </div>

          <div className="about__content">
            <span className="section__subtitle">About Me</span>
            <h2 className="section__title">
              Software Engineer building enterprise-grade web applications & automation solutions
            </h2>
            <p className="about__description">
              Software Engineer with 2+ years of experience developing enterprise web applications 
              and automation solutions. I specialize in React, Python, Django, FastAPI, Azure DevOps, 
              SharePoint Framework (SPFx), and Power Automate — building scalable, user-centric 
              solutions from corporate intranets to business process automation systems.
            </p>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <div className="about__stat glass-card" key={index}>
                  <div className="about__stat-icon">{stat.icon}</div>
                  <div className="about__stat-info">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;