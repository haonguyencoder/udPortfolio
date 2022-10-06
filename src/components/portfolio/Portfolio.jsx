import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.png'
import IMG2 from '../../assets/project-5.png'
import IMG3 from '../../assets/project-3.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-COMMERCE Website',
    github: 'https:/github.comhttps://github.com/RuddyDL/Ecommerce',
    demo: 'https://ecommercewebsite-zeta.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React Portfolio Website',
    github: 'https://github.com/RuddyDL/myportfoliowebsite',
    demo: 'https://myportfoliowebsite-two.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React Restaurant Website',
    github: 'https://github.com/RuddyDL/RestaurantWebsite',
    demo: 'https://rdrestaurant.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-img">
                 <img src={image} alt={title} />
              </div>
                 <h3>{title}</h3>
              <div className="portfolio__item-cta">
                 <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                 <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
      </section>
  )
}

export default Portfolio