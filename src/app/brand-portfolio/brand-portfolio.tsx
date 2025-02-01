import Link from 'next/link'

import { Layout } from '@components'

export default function BrandPortfolio() {
  return (
    <Layout title="Brand folio | Devero">
      <h1>Hi from the Brand folio page</h1>

      <Link href="/">Go back to the homepage</Link>
    </Layout>
  )
}
