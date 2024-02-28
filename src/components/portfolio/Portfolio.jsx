import React from 'react'
import "./portfolio.css";
import BookStall from "../../assets/works/bookstall_django_project.png";
import MsiStatic from "../../assets/works/MSI_static.png";
import MsiRespo from "../../assets/works/msi_responsive.png";
import OGHealthCare from "../../assets/works/og_healthcare.png";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>

          <article className='protfolio__item'>
            <div className='portfolio__item-image'>
              <img src={BookStall} alt="" />
            </div>
            <h3>BookStall Ecom website (django)</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vishnu2044/BookStall" className='btn'>GitHub</a>
              <a href="https://bookstall.store/" className='btn btn-primary' target='_blank' >live demo</a>
            </div>

          </article>

          <article className='protfolio__item'>
            <div className='portfolio__item-image'>
              <img src={MsiRespo} alt="" />
            </div>
            <h3>MSI website front page (responsive)</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vishnu2044/msi-clone" className='btn'>GitHub</a>
              <a href="https://vishnu2044.github.io/msi-clone/" className='btn btn-primary' target='_blank' >live demo</a>
            </div>
          </article>

          <article className='protfolio__item'>
            <div className='portfolio__item-image'>
              <img src={MsiStatic} alt="" />
            </div>
            <h3>Msi front page</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vishnu2044/msi-webpage-front-page" className='btn'>GitHub</a>
              <a href="https://vishnu2044.github.io/msi-webpage-front-page/" className='btn btn-primary' target='_blank' >live demo</a>
            </div>
          </article>

          <article className='protfolio__item'>
            <div className='portfolio__item-image'>
              <img src={OGHealthCare} alt="" />
            </div>
            <h3>OG HealthCare front page </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vishnu2044/GG-healthcare-front-page" className='btn'>GitHub</a>
              <a href="https://vishnu2044.github.io/GG-healthcare-front-page/" className='btn btn-primary' target='_blank' >live demo</a>
            </div>
          </article>

        </div>

        <div className=''>
          <p className='portfolio__item-scroll'><FaArrowRight /></p>
        </div>


      </section>
    </div>
  )
}

export default Portfolio