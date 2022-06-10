import { memo } from 'react'

export const Hero = memo(() => (
  <div className="hero jumbotron bg-white px-0">
    <div className="row py-5">
      <div className="col-md-8 col-lg-7">
        {/* <h1 className="display-3 font-bebas">DEVERO Corporation</h1> */}

        <h1 className="h4 display mb-2">Next-level digital<br /> products and solutions</h1>

        <p className="body1 lead">We are a full-stack software studio that builds digital products and solutions for customer-centric companies, optimized for user experience and performance.</p>
      </div>
    </div>
  </div>
))
