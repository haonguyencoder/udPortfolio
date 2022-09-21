import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/U */}
        <article className='service'>
           <div className="service__head">
            <h3>UI/UX Design</h3>
           </div>

           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
                <p>UX Design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>User Research and Analysis </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Customer Journey Mapping </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>User Testing </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>UI and Interaction Design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Mobile First and Responsive Design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Wireframe and Interactive Prototyping </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Customer Experience Consulting </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Design Thinking </p>
            </li>
           </ul>
        </article>
          {/* Web Development */}
        <article className='service'>
           <div className="service__head">
            <h3>Web Development</h3>
           </div>

           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Technology and Platform Engineering </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>eCommerce Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Intranet Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Enterprise Integration and Microservices </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>DevOps Design and Engineering </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Quality Assurance Services </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Outsourced Product Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Continuous Delivery and Development </p>
            </li>
           </ul>
        </article>
           {/* Content Creation */}
        <article className='service'>
           <div className="service__head">
            <h3>Content Creation</h3>
           </div>

           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Search Engine Optimization </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Programmatic and Digital Advertising  </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Social Media Advertising </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Consumer Sentiment Analytics </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Campaign Planning and Execution </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Campaign Analytics and Optimization </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Content Management and Operations </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
                <p>Creative Production </p>
            </li>
           </ul>
        </article>
      </div>
    </section>
  )
}

export default Services