import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/carzone.png'
import IMG2 from '../../assets/gatInventory.png'
import IMG3 from '../../assets/personal.png'
import IMG4 from '../../assets/portfolio_react.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Car zone',
    github:'https://github.com/dnp176/Carzon_Django_Project',
    demo:'https://carzonpro.herokuapp.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'Inventory Management',
    github:'https://github.com/dnp176/GujaratAbrasive_tools',
    demo:'#'
  },
  {
    id:3,
    image:IMG3,
    title:'Personal Website',
    github:'https://github.com/dnp176/PersonalWebsite',
    demo:'#'
  },
  {
    id:4,
    image:IMG4,
    title:'Personal Portfolio',
    github:'#',
    demo:'http://dnp176.herokuapp.com/'
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