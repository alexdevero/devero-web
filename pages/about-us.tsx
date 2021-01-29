import Link from 'next/link'

import Layout from '../components/layout'
import { PageHeader } from '../components/page-header'

const AboutUs = () => (
  <Layout title="About Us | Devero" isFluid>
    <PageHeader title="About us" />

    {/* <Link href="/">Go back to the homepage</Link> */}

    <div className="row text-center">
      <div className="col md-6 about-box">
        <div className="about-box-title">Startup garage</div>

        <p></p>

        <Link href="/about-us">Learn more &gt;</Link>
      </div>

      <div className="col md-6 about-box">
        <div className="about-box-title">Product lab</div>

        <p></p>

        <Link href="/about-us">Learn more &gt;</Link>
      </div>
    </div>

    <div className="row text-center">
      <div className="col md-6 about-box">
        <div className="about-box-title">Startup incubator</div>

        <p>Program to help new startups succeed. Workspace, seed funding, mentoring and training to get from initial idea to successful business.</p>

        <Link href="/about-us">Learn more &gt;</Link>
      </div>

      <div className="col md-6 about-box">
        <div className="about-box-title">Startup accelerator</div>

        <p>Taking startups to the next level of their development. Leverage their initial successes, fine tune business models, meet potential investors.</p>

        <Link href="/about-us">Learn more &gt;</Link>
      </div>
    </div>
  </Layout>
)

export default AboutUs
