import React from 'react'
import CV from '../../assets/Dhruv_WE_New.pdf'

export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
export default CTA