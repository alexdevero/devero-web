import Link from 'next/link'
import { memo } from 'react'

import { Layout } from '@components/layout'

const Foundation = memo(() => (
  <Layout title="Foundation | Devero">
    <h1>Hi from the Foundation page</h1>

    <Link href="/">Go back to the homepage</Link>
  </Layout>
))

export default Foundation
