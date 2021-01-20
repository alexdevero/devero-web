import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Foundation = () => (
  <Layout>
    <SEO title="Foundation" keywords={['company', 'innovation', 'technology', 'web design', 'web development', 'nanotechnology', 'financial', 'space', 'media', 'industries', 'robotics', 'security', 'ventures', 'ai', 'genomics']} />

    <h1>Hi from the Foundation page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Foundation
