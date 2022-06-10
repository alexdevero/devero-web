// import Link from 'next/link'
import { memo } from 'react'
import { useIntl } from 'react-intl'

import { Layout } from '../components/layout'
import { PageHeader } from '../components/page-header'

const AboutUs = memo(() => {
  const intl = useIntl()

  return (
    <Layout title="About Us | Devero" isFluid>
      <PageHeader title={intl.formatMessage({ defaultMessage: 'About us' })} />

      <div className="container pb-3">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <p className="m-0">{intl.formatMessage({ defaultMessage: 'Our mission is two-fold. First, it is to help anyone with an idea to create a startup that will succeed. Second, it is to help startups, companies, governments and also individuals to build great products users will love.' })}</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center pb-3">
        <div className="col-md-8 col-lg-5 text-center">
          <h2 className="h3 text-center mt-2 mb-2">{intl.formatMessage({ defaultMessage: 'What we do' })}</h2>

          <hr className="divider" />

          <p>{intl.formatMessage({ defaultMessage: 'We help our clients achieve their goals, whether it is building a product or building a startup, in these four ways: product lab, startup garage, startup incubator and startup accelerator.' })}</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-6 about-box border-top border-right">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="h4 about-box-title m-0">{intl.formatMessage({ defaultMessage: 'Product lab' })}</h3>

              <hr className="divider" />

              <p className="my-3">{intl.formatMessage({ defaultMessage: 'Turning your idea into a real product for you. We help you analyze, validate, plan, build, design, and release your product to market.' })}</p>

              {/* <Link href="/about-us">Learn more &gt;</Link> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 about-box border-top">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="h4 about-box-title m-0">{intl.formatMessage({ defaultMessage: 'Startup garage' })}</h3>

              <hr className="divider" />

              <p className="my-3">{intl.formatMessage({ defaultMessage: 'Taking care of creating your startup, even managing it till it becomes profitable. From development, marketing, sales, to business development.' })}</p>

              {/* <Link href="/about-us">Learn more &gt;</Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-6 about-box border-top border-right">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="h4 about-box-title m-0">{intl.formatMessage({ defaultMessage: 'Startup incubator' })}</h3>

              <hr className="divider" />

              <p className="my-3">{intl.formatMessage({ defaultMessage: 'Helping new startups succeed. Workspace, seed funding, mentoring and training necessary to get from initial idea to successful business.' })}</p>

              {/* <Link href="/about-us">Learn more &gt;</Link> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 about-box border-top">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="h4 about-box-title m-0">{intl.formatMessage({ defaultMessage: 'Startup accelerator' })}</h3>

              <hr className="divider" />

              <p className="my-3">{intl.formatMessage({ defaultMessage: 'Taking startups to the next level of their development. Leverage initial successes, fine tune business models, meet potential investors.' })}</p>

              {/* <Link href="/about-us">Learn more &gt;</Link> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default AboutUs
