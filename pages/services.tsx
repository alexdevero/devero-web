import { memo } from 'react'

import { Layout } from '../components/layout'
import { PageHeader } from '../components/page-header'

const Services = memo(() => (
  <Layout title="Services | Devero">
    <PageHeader title="Services" />
  </Layout>
))

Services.displayName = 'Services'

export default Services
