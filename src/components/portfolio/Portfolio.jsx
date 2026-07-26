import React from 'react';
import "./portfolio.css";
import BookStall from "../../assets/works/bookstall_django_project.png";
import MsiRespo from "../../assets/works/msi_responsive.png";
import MsiStatic from "../../assets/works/MSI_static.png";
import OGHealthCare from "../../assets/works/og_healthcare.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    {
      image: BookStall,
      title: "BookStall E-Commerce",
      tech: ["Django", "PostgreSQL", "Bootstrap"],
      description: "Full-featured e-commerce platform with cart, checkout, payment integration, and admin dashboard.",
      github: "https://github.com/vishnu2044/BookStall",
      live: "https://bookstall.store/",
    },
    {
      image: MsiRespo,
      title: "MSI Website Clone (Responsive)",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Pixel-perfect responsive recreation of MSI's front page showcasing advanced CSS and layout skills.",
      github: "https://github.com/vishnu2044/msi-clone",
      live: "https://vishnu2044.github.io/msi-clone/",
    },
    {
      image: MsiStatic,
      title: "MSI Front Page",
      tech: ["HTML", "CSS"],
      description: "Static recreation of MSI product page with precise attention to design detail and typography.",
      github: "https://github.com/vishnu2044/msi-webpage-front-page",
      live: "https://vishnu2044.github.io/msi-webpage-front-page/",
    },
    {
      image: OGHealthCare,
      title: "OG HealthCare",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Healthcare website front page with clean, professional design and accessible UI.",
      github: "https://github.com/vishnu2044/GG-healthcare-front-page",
      live: "https://vishnu2044.github.io/GG-healthcare-front-page/",
    },
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header--center">
          <span className="section__subtitle">// RECENT WORK</span>
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__description">
            A selection of projects that demonstrate my expertise across the full stack.
          </p>
        </div>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <div className="portfolio__card glass-card" key={index}>
              <div className="portfolio__image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio__image-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="portfolio__link" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="portfolio__link" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="portfolio__info">
                <div className="portfolio__tags">
                  {project.tech.map((t, idx) => (
                    <span className="portfolio__tag" key={idx}>{t}</span>
                  ))}
                </div>
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <div className="portfolio__actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                    <FiGithub /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn--primary" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;