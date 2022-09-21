import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'
import {BsArrowUpSquareFill} from 'react-icons/bs'
import { useState as UseState } from 'react'

const contact = () => {
  const form = UseRef();
  const [activeNav, setActiveNav] = UseState("#")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7vzrgce', 'template_j3u6jnn', form.current, 'FXJ3_Gzb8K92hjK0I')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>honghao.2107@gmail.com</h5>
            <a href="mailto:honghao.2107@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Message</h4>
            <h5>Hao Nguyen</h5>
            <a href="https://www.messenger.com/t/100019215442737" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+84)968851036</h5>
            <a href="https://wa.me/+840968851036" target="_blank" rel="noreferrer">Call Me</a>
          </article>
        </div>
       {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Insert your Name' required />
          <input type="email" name='email' placeholder='Insert your Email' required />
          <textarea name="message" rows="7" placeholder='Write your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>  
      </div>

      {/* ============== Scroll up =========== */}
      <div className="scroll__up">
        <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BsArrowUpSquareFill /></a>
      </div>
    </section>
  )
}

export default contact