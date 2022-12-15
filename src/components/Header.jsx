import React from 'react'
import styled from 'styled-components'
import ThumbnailIMG from '../assets/awashawash.jpeg'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${ThumbnailIMG});
    background-size: cover; 
    color: var(--color-white);
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Awash Awash</h1>
    </HeaderContainer>
  )
}

export default Header