import { memo } from 'react'

import { Layout } from './../components/layout'
import { PageHeader } from './../components/page-header'

const Changelog = memo(() => (
  <Layout title="Changelog | Devero">
    <PageHeader title="Changelog" />

    <p className="text--center">Nothing to see, yet...</p>
  </Layout>
))

export default Changelog
