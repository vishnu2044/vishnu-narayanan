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
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
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

        <div className='container experience__company_details__container'>
          <div className="experience__frontend">
            <h3>Experience History</h3>

            <div className="experience__company__content">
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>BytezTechWeb Solution Pvt. Ltd</h4>
                  <div style={{ display: 'flex' }}>
                    <p className='text-light' style={{ marginLeft: '16px', fontSize: '14px' }}>Python developer</p>
                    <p className='text-light' style={{ marginLeft: '16px', fontSize: '14px' }}>6 months</p> 
                  </div>
                </div>
              </article>
              <article className='experience__details'>
                <p></p>
                <p></p>
                <div>
                  <small className=''>Since April 2024, I have been working remotely at Byteztechweb Solutions, 
                    contributing to a dynamicandgrowth-oriented environment. As a Python Django developer, 
                    I have successfully completed several projects,showcasing my back-end development expertise. 
                    My role also involves working with Next.js, PostgreSQL, andVue.js, ensuring seamless integration and functionality. 
                    This experience has significantly enhanced my technical skills and ability to deliver high-quality solutions.
                  </small>
                </div>
              </article>
            </div>

            <div className="experience__company__content" >
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details_icon" />
                <div>
                  <h4>Brototype</h4>
                  <div style={{ display: 'flex' }}>
                    <p className='text-light' style={{ marginLeft: '16px', fontSize: '14px' }}>Python Full stack developer (Internship)</p>
                    <p className='text-light' style={{ marginLeft: '16px', fontSize: '14px' }}>1 year</p> 
                  </div>
                </div>
              </article>
              <article className='experience__details'>
                <p></p>
                <p></p>
                <div>
                  <small className=''>During my time as a Python Django Full Stack Web Developer at Brototype, 
                    my role involvedservingasaDjango React Full Stack Developer. Through self-directed learning, 
                    I experienced a significant expansionofprogramming skills, resulting in the successful completion of two major projects and several minor projects.
                    The hands-on experience provided a robust understanding of full-stack development, enabling effective contributions to diverse projects</small>
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