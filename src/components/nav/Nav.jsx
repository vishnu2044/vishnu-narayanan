import React, {useState} from 'react'
import "./nav.css";
import {RiHome2Line, RiServiceFill} from "react-icons/ri";
import {FaUser} from "react-icons/fa";
import {BsPersonWorkspace} from "react-icons/bs";
import {BiMessageRounded} from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <div>
      <nav >
        <a 
          onClick={()=> setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""} 
          href="#header">
            <RiHome2Line />
        </a>
        <a 
          href="#about" 
          onClick={()=>setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}>
            <FaUser />
        </a>
        <a onClick={()=>setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""} 
          href="#experience">
            <BsPersonWorkspace />
        </a>
        <a 
          onClick={()=>setActiveNav("#services")} 
          className={activeNav === "#services" ? "active" : ""}
          href="#services">
            <RiServiceFill />
        </a>
        <a 
          onClick={()=>setActiveNav("#contact")} 
          className={activeNav === "#contact" ? "active" : ""}
          href="#contact">
            <BiMessageRounded />
        </a>
      </nav>
    </div>
  )
}

export default Nav