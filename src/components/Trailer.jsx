import React from 'react'
import './Trailer.css'

const Trailer = () => {
  return (
    <section id="trailer">
      <h2>Trailer</h2>
      <div className='video-responsive'>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/708198601?h=4831dc1306" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Trailer