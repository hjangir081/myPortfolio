import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blmijr8', 'template_bvjcd0p', form.current, 'WrSr0nf1saIkhtrOK')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>hjangir500@gmail.com</h5>
            <a href='mailto:hjangir500@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
          <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Himanshu Jangir</h5>
            <a href='https://www.linkedin.com/in/himanshu-jangir-4a798a217/' target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>7891383217</h5>
            <a href='https://api.whatsapp.com/send?phone = +91 7891383217' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact