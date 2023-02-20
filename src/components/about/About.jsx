import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
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
                <small>2.5+ Years Working</small>
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
                <small>5+ Completed</small>
              </article>
            </div>
        </div>
        <p>
        We have 2.5+ year experience in software development. We have created multiple types of projects in multiple languages. Also we have experience in Core PHP, Laravel, Python, Django Framework, ReactJs, NodeJs, AngularJS, UI/UX, JavaScript, Html5, Css3, Bootstrap4, Selenium, Java, Automation Programming etc. We have use MySQL, MongoDB and PostgreSQL database. We have developed client base requirements applications.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
