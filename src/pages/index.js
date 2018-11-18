import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to The DEVERO Corporation</h1>

    <p>
      The DEVERO Corporation is the home of DEVERO. We support the growth of the
      DEVERO brand by developing and nurturing valuable DEVERO businesses. We
      aspire to change the world for good.
    </p>

    <div className="dashboard row">
      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">AI</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on research and development
              of AI.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Financial</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on banking and fintech.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Foundation</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on social good and
              philantrophy.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Galactic</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on research and development
              of space technologies.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Genomics</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on research and development
              of genomics and related technologies.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Industries</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on bringing research to the
              physical world.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Media</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on marketing and media.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Studio</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on design, development and
              hosting.
            </p>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-4">
        <Link to="/" className="company-box">
          <div className="card-box__thumbnail" />

          <div className="company-box__info">
            <h2 className="company-box__heading">Technologies</h2>

            <p className="company-box__description">
              Division of DEVERO Corporation focused on research and development
              of innovative technologies.
            </p>
          </div>
        </Link>
      </div>
    </div>
    {/*<Link to="/about-us/">About us</Link>*/}
  </Layout>
)

export default IndexPage
