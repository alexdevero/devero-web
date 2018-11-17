import React from 'react'
// import { Link } from 'gatsby'

import '../styles/normalize.css'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>DEVERO Corporation</h1>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    {/*<Link to="/about-us/">About us</Link>*/}
  </Layout>
)

export default IndexPage
