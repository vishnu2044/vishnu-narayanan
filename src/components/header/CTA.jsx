import React from 'react';
import CV from "../../assets/cv.pdf";
import resume from '../../assets/Django-React-Developer-Vishnu Narayanan.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn' >Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        
    </div>
  )
}

export default CTA;