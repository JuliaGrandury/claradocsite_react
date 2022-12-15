import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <h3>Awash Awash</h3>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#trailer'>Trailer</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#bios'>Bios</a></li>
        <li><a href='#screenings'>Screenings</a></li>
        <li><a href='#credits'>Credits</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; Julia Grandury. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer