import React from 'react'
import styled from 'styled-components'

import homeHero from './../../assets/images/bcgs/earth-from-space-rotated.jpg'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  background-color: #111;
  background-image: url(${homeHero});
  background-size: cover;
  background-position: center;
`

const HomeHeading = styled.h1`
  margin: 0;
  font-family: 'Devero', arial, sans-serif;
  font-size: 34px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 420px) {
    font-size: 54px;
  }

  @media (min-width: 768px) {
    font-size: 84px;
  }
`

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <HomeHeading>DEVERO <br/>Corporation</HomeHeading>
      </HomeWrapper>
    )
  }
}
