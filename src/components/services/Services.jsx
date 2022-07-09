import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

       <div className="container services__container">
          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Front-End Development</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Backend-End Development</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Responsive Design</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Digital Strategy</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>User Experience & Design</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>24x7 Support & Maintenance </p>
              </li>
            </ul>
          </article>

          
       </div>
    </section>
  )
}
export default Services