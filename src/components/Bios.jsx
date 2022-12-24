import React from 'react'
import './bios.css'
import general from '../assets/general.jpeg'
import walawala from '../assets/walawala.jpeg'
import unknown from '../assets/unknown.jpeg'

const bioData = [
  {
    id: 1,
    name: 'General',
    description: '',
    img: general,
  },
  {
    id: 2,
    name: 'Wala Wala',
    description: '',
    img: walawala,
  },
  {
    id: 3,
    name: 'Unknown',
    description: '',
    img: unknown,
  }
]

const Bios = () => {
  return (
    <section id="bios">
      <h2>Biographies</h2>

      <div className="container bio__container">
        {bioData.map((person) => {
          return (
            <article key={person.id} className="bio__item">
              <div className="bio__image">
                <img src={person.img} alt={person.name} />
              </div>
              {/* <h5>{person.name}</h5>
              <p>{person.description}</p> */}
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default Bios