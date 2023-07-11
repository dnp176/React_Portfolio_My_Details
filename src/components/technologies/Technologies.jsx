import React from 'react'
import './technologies.css'
import IMG1 from '../../assets/programming/php.png'
import IMG2 from '../../assets/programming/laravel.png'
import IMG3 from '../../assets/programming/python.png'
import IMG4 from '../../assets/programming/django.png'
import IMG5 from '../../assets/programming/bootstrap.png'
import IMG6 from '../../assets/programming/js.png'
import IMG7 from '../../assets/programming/html-5.png'
import IMG8 from '../../assets/programming/css.png'
import IMG9 from '../../assets/programming/nodejs.png'
import IMG10 from '../../assets/programming/postgre.png'
import IMG11 from '../../assets/programming/mysql.png'
import IMG12 from '../../assets/programming/github.png'
import IMG13 from '../../assets/programming/atom.png'
import IMG14 from '../../assets/programming/java.png'
import IMG15 from '../../assets/programming/data_science.png'
import IMG16 from '../../assets/programming/opencv.png'
import IMG17 from '../../assets/programming/selenium.png'
import IMG18 from '../../assets/programming/ai.png'
import IMG19 from '../../assets/programming/ml.png'
import IMG20 from '../../assets/programming/web_analytics.png'
import IMG21 from '../../assets/programming/gitlab.png'

const data = [
  {
    id:3,
    image:IMG3,
  },
  {
    id:18,
    image:IMG18,
  },
  {
    id:19,
    image:IMG19,
  },
  {
    id:20,
    image:IMG20,
  },
  {
    id:14,
    image:IMG14,
  },
  {
    id:15,
    image:IMG15,
  },
  {
    id:16,
    image:IMG16,
  },
  {
    id:17,
    image:IMG17,
  },
  {
    id:10,
    image:IMG10,
  },
  {
    id:11,
    image:IMG11,
  },
  {
    id:12,
    image:IMG12,
  },
  {
    id:21,
    image:IMG21,
  },
  {
    id:4,
    image:IMG4,
  },
  {
    id:5,
    image:IMG5,
  },
  {
    id:6,
    image:IMG6,
  },
  {
    id:7,
    image:IMG7,
  },
  {
    id:8,
    image:IMG8,
  },
  {
    id:9,
    image:IMG9,
  },
  {
    id:13,
    image:IMG13,
  },
  {
    id:1,
    image:IMG1,
  },
  {
    id:2,
    image:IMG2,
  },
]

export const Technologies = () => {
  return (
    <section id='technologies'>
      <h5>We are work on this</h5>
      <h2>Technologies</h2>

      <div className="container technology__container">

        {
            data.map(({id,image,title,github,demo}) => {
              return(
                <artical key={id} className='technology_item'>
                  <div className="technology__item-image">
                    <img src={image} alt=''/> 
                  </div>
                </artical>
              )
            })
          }

        {/* <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical>

        <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical>
        <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical>
        <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical>
        <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical>
        <artical className='technology_item'>
          <div className="technology__item-image">
              <img src={IMG1} alt='' width="50"/>
          </div>
        </artical> */}
      </div>
    </section>
  )
}
export default Technologies
