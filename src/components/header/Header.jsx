import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/first_profile_pic.jpg"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container header__container">
          <h5>Hello I'am</h5>
          <h1>Vishnu Narayanan</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img className='myimg' src={ME} alt="" />
          </div>
          <a href='#contact' className='scroll__down' >Scroll down</a>
        </div>


      </header>
    </div>
  );
}

export default Header;