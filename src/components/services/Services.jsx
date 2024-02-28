import React from 'react'
import "./services.css";
import {BsCheckLg} from 'react-icons/bs';

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5>What is offer</h5>
        <h2>Services</h2>
        <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
              <h3>Frontend Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Custom HTML and CSS Development with React Integration</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Interactive React Solutions</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>API Integration with React</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Responsive Web Design with React Components</p>
              </li>
            </ul>
            {/* END OF FRONT END TAGE */}
          </article>

          <article className='service'>
            <div className='service__head'>
              <h3>Backend Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Custom Django Application Development</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p> Design and Management</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>API Development</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Authentication and Authorization</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Integration of Third-Party Services</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Maintenance and Support</p>
              </li>
            </ul>
          </article>


          {/* <article className='service'>
            <div className='service__head'>
              <h3>Database</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Database Design and Optimization</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Data Modeling and Documentation</p>
              </li>
            </ul>
          </article> */}


        </div>

      </section>
    </div>
  )
}

export default Services