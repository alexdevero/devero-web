import { memo } from 'react'

import { Layout } from '../components/layout'

const NotFoundPage = memo(() => (
  <Layout title='404 - Not Found'>
    <h1>NOT FOUND</h1>

    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
))

export default NotFoundPage
