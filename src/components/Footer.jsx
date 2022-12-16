import React from 'react'
import './footer.css'

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
        <p>&copy; Built by <a href='https://juliagrandury.github.io/'>Julia Grandury</a>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer