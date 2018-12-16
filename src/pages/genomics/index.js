import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const DeveroGenomics = () => (
  <Layout>
    <SEO title="DEVERO Genomics" keywords={['company', 'innovation', 'technology', 'web design', 'web development', 'nanotechnology', 'financial', 'space', 'media', 'industries', 'robotics', 'security', 'ventures', 'ai', 'genomics']} />

    <h1>Hi from the Devero Genomics page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DeveroGenomics
