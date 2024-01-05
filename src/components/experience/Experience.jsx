import React from 'react'
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <div>
      <section id='experience'>
        <h5>what Skills I Have</h5>
        <h2>My experience</h2>
        <div className='container experience__container'>
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>


            </div>

          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>django</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>django Rest API</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>django Rest API</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Begginer</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>GitHub</h4>
                  <small className='text-light'>intermediate</small>
                </div>
                </article>
              </div>

          </div>


        </div>
        

      </section>
    </div>
  )
}

export default Experience