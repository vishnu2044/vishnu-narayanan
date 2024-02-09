import React from 'react'
import "./about.css";
import ME from "../../assets/profile_pic_02.jpg"
import {FaAward} from "react-icons/fa"
import {RiServiceFill} from "react-icons/ri"
import {FcOpenedFolder} from "react-icons/fc"

const About = () => {
  return (
      <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>

            <article className='about__card'>
              <RiServiceFill className='about__icon' />
              <h5>Servies</h5>
              <small>Check out my services</small>
            </article>

            <article className='about__card'>
              <FcOpenedFolder className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
          Passionate self-taught Python Django Full Stack Developer with a strong foundation in Python and Django, demonstrating mastery in back-end development. Proficient in utilizing React to create dynamic and responsive front-end experiences. Eager to apply my skills in a challenging and innovative work environment, contributing to cutting-edge projects and continually advancing my expertise.          </p>
            
          </div>
          <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </section>
  )
}

export default About