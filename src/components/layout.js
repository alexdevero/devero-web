import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Header from './header'

import '../styles/normalize.css'
import '../styles/_base.css'
import '../styles/_grid.css'
import '../styles/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&amp;subset=latin-ext"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
        </Helmet>

        <div className="page-wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="page-content">
            <div className="container">{children}</div>
          </div>

          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
