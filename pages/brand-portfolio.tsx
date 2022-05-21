import Link from 'next/link'
import { memo } from 'react'

import { Layout } from '../components/layout'

const BrandPortfolio = memo(() => (
  <Layout title="Brand folio | Devero">
    <h1>Hi from the Brand folio page</h1>

    <Link href="/">Go back to the homepage</Link>
  </Layout>
))

export default BrandPortfolio
