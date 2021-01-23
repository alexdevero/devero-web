import Link from 'next/link'

import Layout from '../components/layout'

const AboutUs = () => (
  <Layout title="About Us | Devero">
    <h1>Hi from the About us page</h1>

    <Link href="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUs
