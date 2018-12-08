// https://github.com/Wufe/react-particles-js

import React from 'react'
import Particles from 'react-particles-js'

export class ParticlesComponent extends React.Component {
  render() {
    return (
      <Particles
        width="320"
        height="320"
        className="particles-canvas__wrapper"
        canvasClassName="particles-canvas-deer"
        params={{
          'fps_limit': 28,
          'particles': {
            'number': {
              'value': 200,
              'density': {
                'enable': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 30,
              'opacity': 0.4
            },
            'move': {
              'speed': 1
            },
            'opacity': {
              'anim': {
                'enable': true,
                'opacity_min': 0.05,
                'speed': 2,
                'sync': false
              },
              'value': 0.4
            }
          },
          'polygon': {
            'enable': true,
            'scale': 0.5,
            'type': 'inline',
            'move': {
              'radius': 10
            },
            url: require('./../images/deer.svg'),
            'inline': {
              'arrangement': 'equidistant'
            },
            'draw': {
              'enable': true,
              'stroke': {
                'color': 'rgba(1, 1, 1, .2)'
              }
            }
          },
          'retina_detect': false,
          'interactivity': {
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'bubble'
              }
            },
            'modes': {
              'bubble': {
                'size': 6,
                'distance': 40
              }
            }
          }
        }}
      />
    )
  }
}

export class ParticlesComponentSimple extends React.Component {
  render() {
    return (
      <Particles
        className="particles-canvas__wrapper"
        canvasClassName="particles-canvas"
        height="600"
        params={{
          particles: {
            number: {
              value: 100
            },
            color: {
              value: '#111'
            },
            size: {
              value: 1
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#111',
              opacity: 0.2,
              width: 1
            },
            opacity: {
              value: 0.25,
              random: false
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse'
              }
            }
          }
        }}
      />
    )
  }
}
