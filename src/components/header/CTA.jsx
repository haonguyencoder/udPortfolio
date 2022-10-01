import React from 'react'
import CV from '../../assets/HaoNguyen_FE.pdf'
import {FiDownload} from 'react-icons/fi'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'><span>Download CV</span><i></i>
        <FiDownload className='icon-download' />
        </a>
        <a href="#contact" className='btn btn-primary'><span>Let's Talk</span><i></i></a> 
    </div>
  )
}

export default CTA