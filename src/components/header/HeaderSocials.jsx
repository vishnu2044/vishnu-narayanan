import React from 'react'
import {BsLinkedin, BsInstagram} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vishnu-narayanan2044/" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com/vishnu2044" target='_blank'><FaGithubSquare /></a>
        <a href="https://www.instagram.com/" target='_blank'> <BsInstagram /> </a>

    </div>
  )
}

export default HeaderSocials