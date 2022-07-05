import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:2,
    image:IMG2,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:3,
    image:IMG3,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:4,
    image:IMG4,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:5,
    image:IMG5,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:6,
    image:IMG6,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  },
  {
    id:7,
    image:IMG1,
    title:'Project Name',
    github:'#',
    demo:'https://dribbble.com/shots/18644800-NFT-Marketplace-Website'
  }

]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Dynamic Data using static Array */}
        
        {
            data.map(({id,image,title,github,demo}) => {
              return(
                <artical key={id} className='portfolio_item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt=''/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                  </div>
                </artical>
              )
            })
        }


        {/* Dynamic Data using static Array END */}


        {/* Static Data */}
        {/* <artical className='portfolio_item'>

          <artical className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt=''/>
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href='#' className='btn'>Github</a>
              <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
          </artical>

          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='#' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </artical>

        <artical className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=''/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='#' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </artical>

        <artical className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=''/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='#' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </artical>

        <artical className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=''/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='#' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </artical>

        <artical className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=''/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='#' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/18644800-NFT-Marketplace-Website' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </artical> */}
        {/* Static Data End */}
      </div>
    </section>
  )
}
export default Portfolio