import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DNP DEVELOPER</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#technologies'>Technologies</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='https://mylinkstorage.netlify.app/' target='_blank'>Important Link</a></li>

        
      </ul>

    <div className='footer__socials'>
      <a href='https://www.facebook.com/profile.php?id=100009450661649' target="_blank"><FaFacebookF/></a>
      <a href='https://www.instagram.com/dnp176/' target="_blank"><FiInstagram/></a>
      <a href='https://twitter.com/DHRUV_PATEL_176' target="_blank"><IoLogoTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Dnp Developer. All rights reserved</small>
    </div>

    </footer>
  )
}
export default Footer