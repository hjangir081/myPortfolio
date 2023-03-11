import React from 'react';
import './testimonial.css';
import AVTR1 from '../../Assets/avatar1.jpg';
import AVTR2 from '../../Assets/avatar2.jpg';
import AVTR3 from '../../Assets/avatar3.jpg';
import AVTR4 from '../../Assets/avatar4.jpg';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Neha Sharma',
    review: 'Lorem ipsum dolor sit amet. Non doloremque facilis eum optio dignissimoset odicumque 33 deleniti sint qui recusandae perspiciatis qui illum doloremque nam optio cupiditate.In fuga temporibus cum veritatis soluta qui voluptatum'
  },
  {
    avatar: AVTR2,
    name: 'Neha Sharma',
    review: 'Lorem ipsum dolor sit amet. Non doloremque facilis eum optio dignissimoset odicumque 33 deleniti sint qui recusandae perspiciatis qui illum doloremque nam optio cupiditate.In fuga temporibus cum veritatis soluta qui voluptatum'
  },
  {
    avatar: AVTR3,
    name: 'Neha Sharma',
    review: 'Lorem ipsum dolor sit amet. Non doloremque facilis eum optio dignissimoset odicumque 33 deleniti sint qui recusandae perspiciatis qui illum doloremque nam optio cupiditate.In fuga temporibus cum veritatis soluta qui voluptatum'
  },
  {
    avatar: AVTR4,
    name: 'Neha Sharma',
    review: 'Lorem ipsum dolor sit amet. Non doloremque facilis eum optio dignissimoset odicumque 33 deleniti sint qui recusandae perspiciatis qui illum doloremque nam optio cupiditate.In fuga temporibus cum veritatis soluta qui voluptatum'
  },
]


const Testimonial = () => {
  return (
    <section id='projects'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={[  Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='clienets_name'>{name}</h5>
                <small className='clients_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial;