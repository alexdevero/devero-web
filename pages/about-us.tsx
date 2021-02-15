import Link from 'next/link'

import Layout from '../components/layout'
import { PageHeader } from '../components/page-header'

const AboutUs = () => (
  <Layout title="About Us | Devero" isFluid>
    <PageHeader title="About us" />

    <div className="container pb-3">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <p className="m-0">Our mission is two-fold. First, it is to help anyone with an idea to create a startup that will succeed. Second, it is to help startups, companies, governments and also individuals to build great products users will love.</p>
        </div>
      </div>
    </div>

    <h2 className="h3 text-center mt-2 mb-2">What we do</h2>

    <div className="row text-center">
      <div className="col-md-6 about-box border-top border-right">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="h4 about-box-title m-0">Product lab</h3>

            <hr className="divider" />

            <p className="my-3">Turning your idea into a real product for you. We help you analyze, validate, plan, build, design, and release your product to market.</p>

            {/* <Link href="/about-us">Learn more &gt;</Link> */}
          </div>
        </div>
      </div>

      <div className="col-md-6 about-box border-top">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="h4 about-box-title m-0">Startup garage</h3>

            <hr className="divider" />

            <p className="my-3">Taking care of creating your startup, even managing it till it becomes profitable. From development, marketing, sales, to business development.</p>

            {/* <Link href="/about-us">Learn more &gt;</Link> */}
          </div>
        </div>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-md-6 about-box border-top border-right">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="h4 about-box-title m-0">Startup incubator</h3>

            <hr className="divider" />

            <p className="my-3">Helping new startups succeed. Workspace, seed funding, mentoring and training necessary to get from initial idea to successful business.</p>

            {/* <Link href="/about-us">Learn more &gt;</Link> */}
          </div>
        </div>
      </div>

      <div className="col-md-6 about-box border-top">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="h4 about-box-title m-0">Startup accelerator</h3>

            <hr className="divider" />

            <p className="my-3">Taking startups to the next level of their development. Leverage initial successes, fine tune business models, meet potential investors.</p>

            {/* <Link href="/about-us">Learn more &gt;</Link> */}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutUs
