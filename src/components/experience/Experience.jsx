import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AngularJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap4</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
          </div>
        </div>

        <div className='experience__backendend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Laravel Framework</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Core PHP</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django Framework</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Selenium Web Driver</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artical>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience