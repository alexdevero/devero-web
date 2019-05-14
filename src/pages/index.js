import React from 'react'

// import { IconAi, IconFoundation, IconGenomics, IconIndustries, IconTechnologies } from '../components/icons'
import Layout from '../components/layout'
import { ParticlesComponent, ParticlesComponentSimple } from '../components/particles'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  handleBoxClick = (event) => {
    event.preventDefault()
  }

  render() {
    return(
      <Layout>
        <SEO title="Home" keywords={['company', 'innovation', 'technology', 'web design', 'web development', 'nanotechnology', 'financial', 'space', 'media', 'industries', 'robotics', 'security', 'ventures', 'ai', 'genomics']} />

        <div className="dashboard__header">
          <div className="dashboard__content">
            <h1 className="h2">Welcome to DEVERO Corporation</h1>

            <p>Our mission is to change the world with technology.</p>
          </div>

          <ParticlesComponent />

          {/* <ParticlesComponentSimple /> */}
        </div>

        <div className="dashboard row">
          <div className="col-md-6 col-lg-4">
            <a href="https://ai.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> AI
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">AI</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on research and development of AI.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://financial.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Financial
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Financial</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on banking and fintech.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://foundation.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconFoundation /> */}

                <h3 className="h4">
                  Devero <br /> Foundation
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Foundation</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on social good and philantrophy.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://galactic.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Galactic
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Galactic</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on research and development of space technologies.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://genomics.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconGenomics /> */}

                <h3 className="h4">
                  Devero <br /> Genomics
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Genomics</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on research and development of genomics and related technologies.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://industries.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconIndustries /> */}

                <h3 className="h4">
                  Devero <br /> Industries
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Industries</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on bringing research to the physical world.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://media.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Media
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Media</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on marketing and media.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://robotics.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Robotics
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Robotics</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on robotics and related technologies.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://studio.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Security
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Security</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on providing first-class security solution for individuals, companies and countries.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://studio.devero.io" className="company-box">
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Studio
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Studio</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on design, development and hosting.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://technologies.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconTechnologies /> */}

                <h3 className="h4">
                  Devero <br /> Technologies
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Technologies</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on research and development of innovative technologies.</p>
              </div> */}
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="https://ventures.devero.io" className="company-box" onClick={this.handleBoxClick}>
              <div className="card-box__thumbnail">
                {/* <IconAi /> */}

                <h3 className="h4">
                  Devero <br /> Ventures
                </h3>
              </div>

              {/* <div className="company-box__info">
                <h2 className="company-box__heading">Ventures</h2>

                <p className="company-box__description">Division of DEVERO Corporation focused on growing our portfolio of investments.</p>
              </div> */}
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
