import React from 'react';
import './recentwork.css';
import IMG1 from '../../Assets/portfolio1.jpg';
import IMG2 from '../../Assets/portfolio2.jpg';
import IMG3 from '../../Assets/portfolio3.jpg';
import IMG4 from '../../Assets/portfolio4.jpg';
import IMG5 from '../../Assets/portfolio5.png';
import IMG6 from '../../Assets/portfolio6.jpg';


const data = [
    {
        id:1,
        image:IMG1,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
    {
        id:1,
        image:IMG2,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
    {
        id:1,
        image:IMG3,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
    {
        id:1,
        image:IMG4,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
    {
        id:1,
        image:IMG5,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
    {
        id:1,
        image:IMG6,
        title:'Project Title',
        github:'https://github.com/hjangir081',
        demo:'https://dribbble.com/himanshu081?onboarding=true'
    },
]

const RecentWork = () => {
    return (
        <section id='recentWork'>
            <h5>My Recent Work</h5>
            <h2>Websites</h2>

            <div className='container work_container'>
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className='work_item'>
                            <div className='.work_item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='work_item-cta'>
                                <a href={github} className='btn' target='_blank'>GitHub</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                        )   
                    })
                }
      
            </div>
        </section>
    )
}

export default RecentWork;