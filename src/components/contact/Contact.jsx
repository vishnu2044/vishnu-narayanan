import React from 'react';
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact__options">

          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vishnunarayanan2044@gmail.com</h5>
            <a href="mailto:vishnunarayanan2044@gmail.com" target='_blank' >Send a message</a>
          </article>

        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name='name' placeholder='Enter your name' required/>
          <input type="email" name='email' placeholder='Enter your email' required/>
          <textarea name="message" placeholder='Your message'  rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact