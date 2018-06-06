import React from 'react'
import { Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'

import Devero from './../assets/fonts/devero.otf'

import { Nav } from './components/Nav'

import Example from './pages/Example'
import Home from './pages/Home'

injectGlobal`
  @font-face {
    font-family: 'Devero';
    font-style: normal;
    font-weight: normal;
    src: url(${Devero});
  }

  html,
  body,
  .app-container {
    width: 100%;
    min-height: 100%;
    height: 100%;
  }

  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }
`

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100%;
  height: 100%;

  ${Nav} {
    display: none;
  }
`

export default class Main extends React.Component {
  render () {
    return (
      <MainWrapper>
        <Nav>
          <ul>
            <li>
              <a href="/">Home page</a>

              {/* <a href="/example">Example page</a> */}
            </li>
          </ul>
        </Nav>

        <Route exact={true} path="/" component={Home}/>
        {/* <Route path="/example" component={Example}/> */}
      </MainWrapper>
    )
  }
}
