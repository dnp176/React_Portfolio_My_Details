import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='no img' />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <div className="about__card">
              <article>
                <FaAward  className='about_icon'/>
                <h5>Experience</h5>
                <small>1.2+ Years Working</small>
              </article>
            </div>
            {/* <div className="about__card">
              <article>
                <FiUsers  className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
            </div> */}
            <div className="about__card">
              <article>
                <VscFolderLibrary  className='about_icon'/>
                <h5>Projects</h5>
                <small>3+ Completed</small>
              </article>
            </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
