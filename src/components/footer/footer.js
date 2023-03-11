import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer>
      <a href = '' className='footer_logo'>Himanshu</a>

      <ul className='permalinks'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#experiance'>EXPERIANCE</a></li>
        {/*<li><a href='#services'>SERVICES</a></li>*/}
        <li><a href='#recentWork'>WORK</a></li>
        {/*<li><a href='#testimonials'>TESTIMONIALS</a></li>*/}
        <li><a href='#contact'>CONTACT</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://linkedin.com'><FaLinkedinIn/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; HIMANSHU JANGIR. All Rights are Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer