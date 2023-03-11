import React from 'react';
import './about.css';
import ME from '../../Assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt=''/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiance</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>10+ Clients WorldWide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Hello! Myself Himanshu from India. I'm a Front-End Developer and working
            as a Freelancer, if you want to talk to me about your Project click the below 
            button. Give a Chance to make a beautiful website for You.<br/>            
            Thank You.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about