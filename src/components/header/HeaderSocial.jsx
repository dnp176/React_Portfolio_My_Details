import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'
export const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href='https://www.linkedin.com/in/dhruv-n-patel-4a116616b/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/dnp176/' target='_blank'><FaGithub /></a>
        <a href='https://gitlab.com/dnp17620' target='_blank'><FaGitlab /></a>
    </div>
  )
}
export default HeaderSocial