import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // =============================================
    // EMAIL JS CONFIGURATION
    // Replace these with your own EmailJS credentials:
    // 1. Sign up free at https://www.emailjs.com/
    // 2. Create an Email Service (e.g., Gmail)
    // 3. Create an Email Template
    // 4. Copy your Service ID, Template ID, and Public Key below
    // =============================================
    const SERVICE_ID = 'service_jla2eyn';    // Replace with your EmailJS Service ID
    const TEMPLATE_ID = 'template_h95on6j';  // Replace with your EmailJS Template ID
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // Replace with your EmailJS Public Key

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact__container">
          {/* Left Side */}
          <div className="contact__info">
            <span className="section__subtitle">GET IN TOUCH</span>
            <h2 className="contact__heading">
              Let's build <br />
              <span className="gradient-text">the future</span> <br />
              together.
            </h2>
            <p className="contact__description">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="contact__details">
              <div className="contact__detail glass-card">
                <div className="contact__detail-icon">
                  <FiMail />
                </div>
                <div>
                  <span className="contact__detail-label">Email Address</span>
                  <a href="mailto:vishnunarayanan2044@gmail.com" className="contact__detail-value">
                    vishnunarayanan2044@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__detail glass-card">
                <div className="contact__detail-icon">
                  <FiMapPin />
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Kochi, Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="contact__form-wrapper glass-card">
            <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="from_name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="from_email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your project or enquiry in detail..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`contact__submit btn btn--primary ${status === 'sending' ? 'contact__submit--sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <><FiCheck /> Message Sent!</>
                ) : status === 'error' ? (
                  <><FiAlertCircle /> Failed — Try Again</>
                ) : (
                  <><span>Send Message</span> <FiSend /></>
                )}
              </button>

              {status === 'success' && (
                <p className="contact__status contact__status--success">
                  ✓ Your message has been sent successfully. I'll get back to you soon!
                </p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--error">
                  ✗ Something went wrong. Please try emailing me directly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="contact__availability">
          <span className="contact__availability-dot"></span>
          Available for new projects
        </div>
      </div>
    </section>
  );
};

export default Contact;