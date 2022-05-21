import Link from 'next/link'
import { memo } from 'react'

import { Layout } from '../components/layout'

const CaseStudies = memo(() => (
  <Layout title="Case studies | Devero">
    <h1>Hi from the Case studies page</h1>

    <Link href="/">Go back to the homepage</Link>
  </Layout>
))

export default CaseStudies
