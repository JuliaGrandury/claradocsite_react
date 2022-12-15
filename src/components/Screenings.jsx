import React, { useState } from 'react'

const Screenings = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');

  return (
    <section id="screenings">
      <h2>No Upcoming Screenings</h2>
      <form action="">
        <input type='text' placeholder='Email'></input>
      </form>
    </section>
  )
}

export default Screenings