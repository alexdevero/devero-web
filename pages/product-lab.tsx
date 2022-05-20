import Link from 'next/link'

import Layout from './../components/layout'
import { PageHeader } from './../components/page-header'

const ProductLab = () => (
  <Layout title="Product lab | Devero">
    <PageHeader title="Product lab" />

    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 text-center">
        <p className="mb-4">We turn your idea into a real product for you. We help you analyze, validate, plan, build, design, and release your product to market.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-3">
        <h2 className="h3 mb-2">Strategy</h2>

        <ul className="list-unstyled">
          <li>Product Strategy</li>
          <li>Design Exploration</li>
          <li>Market Research</li>
          <li>Product Definition</li>
          <li>User Insights</li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-3">
        <h2 className="h3 mb-2">Design</h2>

        <ul className="list-unstyled">
          <li>User Experience Design</li>
          <li>Interaction Design</li>
          <li>Visual Design</li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-3">
        <h2 className="h3 mb-2">Technology</h2>

        <ul className="list-unstyled">
          <li>iOS & Android</li>
          <li>React Native</li>
          <li>Frontend (React)</li>
          <li>Backend (Node.js)</li>
          <li>Machine Learning</li>
          <li>AR/VR</li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-3">
        <h2 className="h3 mb-2">Insights</h2>

        <ul className="list-unstyled">
          <li>Target Customer Insights</li>
          <li>Analytics & Metrics tracking</li>
          <li>Reviews & Reports</li>
          <li>Further Recommendations</li>
        </ul>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
        <Link href="/product-lab">
          <a className="btn">Web development</a>
        </Link>
      </div>

      <div className="col-md-6 d-flex justify-content-center justify-content-md-start mt-md-down-2">
        <Link href="/product-lab">
          <a className="btn">App development</a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default ProductLab
