import React from 'react';
import "./services.css";
import { FiLayout, FiDatabase, FiLayers, FiZap } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiLayout />,
      title: "Frontend Development",
      description: "Custom responsive web interfaces built with React, delivering pixel-perfect designs with smooth interactions and modern UX patterns.",
      items: [
        "Custom HTML/CSS with React integration",
        "Interactive & dynamic React solutions",
        "API integration & state management",
        "Responsive design across all devices",
      ],
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      description: "Robust server-side architectures powered by Django, with secure APIs, authentication systems, and scalable database designs.",
      items: [
        "Custom Django application development",
        "RESTful API design & development",
        "Authentication & authorization systems",
        "Database design & optimization",
      ],
    },
    {
      icon: <FiLayers />,
      title: "Full Stack Integration",
      description: "End-to-end solutions connecting frontend and backend seamlessly, with deployment pipelines and third-party service integrations.",
      items: [
        "React + Django full stack apps",
        "Third-party service integrations",
        "Payment gateway integration",
        "Deployment & maintenance support",
      ],
    },
    {
      icon: <FiZap />,
      title: "Performance & Optimization",
      description: "Speed and efficiency focused development, ensuring lightning-fast load times, clean code architecture, and scalable systems.",
      items: [
        "Code optimization & refactoring",
        "Database query optimization",
        "Caching strategies",
        "SEO & web performance audits",
      ],
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section__header--center">
          <span className="section__subtitle">// WHAT I OFFER</span>
          <h2 className="section__title">My Core Competencies</h2>
          <p className="section__description">
            Comprehensive development services tailored to bring your vision to life.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service__card glass-card" key={index}>
              <div className="service__card-glow"></div>
              <div className="service__icon">{service.icon}</div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
              <ul className="service__items">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="service__item-bullet">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;