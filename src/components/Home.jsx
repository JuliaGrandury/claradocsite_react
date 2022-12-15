import React from 'react'
import styled from 'styled-components'
import ThumbnailIMG from '../assets/awashawash.jpeg'

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${ThumbnailIMG});
    background-size: cover; 
    color: var(--color-white);
  `;

const Home = () => {
  return (
    <header>
      <HomeContainer>
        <h1>Awash Awash</h1>
      </HomeContainer>
    </header>
  )
}

export default Home