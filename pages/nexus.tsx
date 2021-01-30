import Layout from './../components/layout'
import { PageHeader } from './../components/page-header'

const Nexus = () => (
  <Layout title="Master Plan | Devero">
    <PageHeader title="Master Plan" />

    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8">
        <h2 className="h3">The big picture</h2>

        <ul className="list-unstyled">
          <li>&ndash;Global domination</li>
          <li>&ndash;Top 10 in Fortune 500</li>
          <li>&ndash;More like Virgin corporation: product itself will be corporation umbrella a group of subsidiaries</li>
          <li>&ndash;One starting point is startup/product garage/lab</li>
          <li>&ndash;Second starting point is startup accelerator and incubator</li>
          <li>&ndash;I love building startups and products, I am good at it, that's the start</li>
        </ul>

        <h2 className="h3 mt-4">Stage one</h2>

        <ul className="list-unstyled">
          <li>
            &ndash;Building products as a Service (Product lab)
            <ul className="list-unstyled pl-3">
              <li>&ndash;Research</li>
              <li>&ndash;Prototyping</li>
              <li>&ndash;Design</li>
              <li>&ndash;development</li>
              <li>&ndash;Maintenance</li>
            </ul>
          </li>

          <li>&ndash;Building startups as a Service (Startup garage)</li>
          <li>&ndash;Building software, hardware and just &ldquo;hacking&rdquo; (Hacker lab)</li>
        </ul>

        <h3 className="h5 mt-2">Products</h3>

        <div className="list-unstyled">
          <li>&ndash;startup builder: application for companies and governments for planning and building startups</li>
          <li>&ndash;product builder: application for companies, startups and individuals for planning and building startups</li>
        </div>

        <h2 className="h3 mt-4">Stage two</h2>

        <ul className="list-unstyled">
          <li>&ndash;Startup incubator</li>
          <li>&ndash;Startup accelerator</li>
        </ul>

        <h2 className="h3 mt-4">Stage three</h2>

        <ul className="list-unstyled">
          <li>&ndash;VC fund</li>
        </ul>

        <h2 className="h3 mt-4">Stage four</h2>

        <ul className="list-unstyled">
          <li>&ndash;Investment management corporation (Bridgewater Associates, BlackRock)</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Nexus
