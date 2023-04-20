import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>All Rights Reserved &copy; Maitri & Yogesh</h4>
        <p className='text-center mt-3'>
          <Link to='/about'>About</Link> |
          <Link to='/contact'>Contact Us</Link> |
          <Link to='/privacypolicy'>Privacy</Link> 
        </p>
    </div>
  )
}

export default Footer