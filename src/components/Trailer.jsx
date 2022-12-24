import React from 'react'
import './Trailer.css'

const Trailer = () => {
  return (
    <section id="trailer">
      <div className="container trailer__container">
        <h2>Trailer</h2>
        <div className='video-responsive'>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/708198601?h=4831dc1306" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='trailer-button'>
          <button className="btn btn-primary">See Trailer</button>
        </div>
      </div>
    </section>
  )
}

export default Trailer