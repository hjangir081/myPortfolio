import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        {/*UI/UX design*/}
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>At Minimum Cost.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>New Designs according to technology.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mordern Effects and Tools </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lots of Design for your Web/App page.</p>
            </li>
          </ul>
        </article>
        {/*Web Development*/}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>At Minimum Cost.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>New Designs according to technology.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mordern Effects and Tools </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lots of Design for your Web/App page.</p>
            </li>
          </ul>
          </article>
        
          {/* Content Creation*/}
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>At Minimum Cost.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>New Designs according to technology.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mordern Effects and Tools </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lots of Design for your Web/App page.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services