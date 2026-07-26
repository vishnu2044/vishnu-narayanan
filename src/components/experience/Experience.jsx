import React from 'react';
import "./experience.css";
import { FiMonitor, FiServer, FiCloud } from "react-icons/fi";

const Experience = () => {
  const techCategories = [
    {
      icon: <FiMonitor />,
      title: "Frontend",
      description: "Building responsive, interactive user interfaces",
      skills: ["React", "JavaScript", "HTML / CSS", "Tailwind CSS", "Bootstrap", "SPFx"],
    },
    {
      icon: <FiServer />,
      title: "Backend",
      description: "Scalable server-side architectures & APIs",
      skills: ["Python", "Django", "FastAPI", "Django REST API", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <FiCloud />,
      title: "Infrastructure",
      description: "DevOps, cloud platforms & workflow automation",
      skills: ["Azure DevOps", "SharePoint", "Power Automate", "GitHub", "Docker", "Linux"],
    },
  ];

  const timeline = [
    {
      date: "Sep 2024 — Present",
      company: "Clydesdale AI",
      role: "Software Engineer",
      description:
        "Working as a Software Engineer with 1.7 years of experience developing enterprise web applications and automation solutions. Primary expertise in React, Python, Django, FastAPI, Azure DevOps, SharePoint, Power Automate, and workflow automation with a strong focus on building SharePoint Framework (SPFx) solutions.",
      highlights: [
        "Corporate intranet development with SPFx",
        "Job hiring automation systems",
        "EMDs management systems & business process automation",
        "SharePoint Framework solutions & Power Automate workflows",
      ],
    },
    {
      date: "Apr 2024 — Aug 2024",
      company: "BytezTechweb Solutions Pvt. Ltd",
      location: "Surat, Gujarat (Remote)",
      role: "Python Developer",
      description:
        "Worked remotely contributing to a dynamic and growth-oriented environment. As a Python Django developer, successfully completed several projects, showcasing back-end development expertise. Also involved with Next.js, PostgreSQL, and Vue.js.",
      highlights: [
        "Built full-stack web applications using Django & React",
        "Integrated third-party APIs and payment gateways",
        "Designed scalable database architectures",
      ],
    },
    {
      date: "2023 — 2024",
      company: "Brototype",
      role: "Python Full Stack Developer (Internship)",
      description:
        "Served as a Django React Full Stack Developer through self-directed learning. Experienced significant expansion of programming skills, resulting in the successful completion of two major projects and several minor projects.",
      highlights: [
        "Integrating React and Django for seamless experiences",
        "Self-taught REST API development",
        "Delivered 2 major and multiple minor projects",
      ],
    },
  ];

  return (
    <section id="experience">
      {/* Technical Stack Section */}
      <div className="container">
        <div className="section__header--center">
          <span className="section__subtitle">// MY TOOLKIT</span>
          <h2 className="section__title">Technical Stack</h2>
          <p className="section__description">
            A comprehensive breakdown of my technical abilities across the full development pipeline.
          </p>
        </div>

        <div className="tech__grid">
          {techCategories.map((cat, catIdx) => (
            <div className="tech__card glass-card" key={catIdx}>
              <div className="tech__card-header">
                <div className="tech__card-icon">{cat.icon}</div>
                <div>
                  <h3 className="tech__card-title">{cat.title}</h3>
                  <p className="tech__card-desc">{cat.description}</p>
                </div>
              </div>
              <div className="tech__tags">
                {cat.skills.map((skill, skillIdx) => (
                  <span className="tech__tag" key={skillIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional History Section */}
      <div className="container experience__history">
        <div className="section__header--center">
          <span className="section__subtitle">// CAREER</span>
          <h2 className="section__title">Professional History</h2>
        </div>

        <div className="timeline">
          <div className="timeline__line"></div>
          {timeline.map((item, index) => (
            <div className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} key={index}>
              <div className="timeline__dot">
                <div className="timeline__dot-inner"></div>
              </div>
              <div className="timeline__card glass-card">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__company">{item.company}</h3>
                {item.location && <span className="timeline__location">{item.location}</span>}
                <span className="timeline__role">{item.role}</span>
                <p className="timeline__description">{item.description}</p>
                <ul className="timeline__highlights">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;