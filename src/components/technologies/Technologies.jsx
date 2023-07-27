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
// var tooltripval = ""
const data = [
  {
    id:3,
    image:IMG3,
    tooltripval:"Python",
  },
  {
    id:18,
    image:IMG18,
    tooltripval:"Artificial Intelligence",
  },
  {
    id:19,
    image:IMG19,
    tooltripval:"Machine Learning",
  },
  {
    id:20,
    image:IMG20,
    tooltripval:"Data Analysis",
  },
  {
    id:14,
    image:IMG14,
    tooltripval:"Java",
  },
  {
    id:15,
    image:IMG15,
    tooltripval:"Data Scientist",
  },
  {
    id:16,
    image:IMG16,
    tooltripval:"Open CV",
  },
  {
    id:17,
    image:IMG17,
    tooltripval:"Selenium",
  },
  {
    id:10,
    image:IMG10,
    tooltripval:"Postgre SQL",
  },
  {
    id:11,
    image:IMG11,
    tooltripval:"MySQL",
  },
  {
    id:12,
    image:IMG12,
    tooltripval:"Github",
  },
  {
    id:21,
    image:IMG21,
    tooltripval:"Gitlab",
  },
  {
    id:4,
    image:IMG4,
    tooltripval:"Django",
  },
  {
    id:5,
    image:IMG5,
    tooltripval:"Bootstrap",
  },
  {
    id:6,
    image:IMG6,
    tooltripval:"Javascript",
  },
  {
    id:7,
    image:IMG7,
    tooltripval:"HTML",
  },
  {
    id:8,
    image:IMG8,
    tooltripval:"CSS",
  },
  {
    id:9,
    image:IMG9,
    tooltripval:"Node JS",
  },
  {
    id:13,
    image:IMG13,
    tooltripval:"React JS",
  },
  {
    id:1,
    image:IMG1,
    tooltripval:"PHP",
  },
  {
    id:2,
    image:IMG2,
    tooltripval:"Laravel",
  },
]

export const Technologies = () => {
  return (
    <section id='technologies'>
      <h5>We are work on this</h5>
      <h2>Technologies</h2>

      <div className="container technology__container">

        {
            data.map(({id,image,tooltripval}) => {
              return(
                <artical key={id} className='technology_item'>
                  <div className="technology__item-image">
                    <img src={image} alt=''/> <span class="tooltiptext">{tooltripval}</span>
                    {/* <ReactTooltip className="custom-tooltip" effect="solid" /> */}
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
