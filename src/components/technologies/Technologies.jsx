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

const data = [
  {
    id:1,
    image:IMG1,
  },
  {
    id:2,
    image:IMG2,
  },
  {
    id:3,
    image:IMG3,
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
    id:13,
    image:IMG13,
  }
]

export const Technologies = () => {
  return (
    <section id='technologies'>
      <h5>Review from clients</h5>
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
