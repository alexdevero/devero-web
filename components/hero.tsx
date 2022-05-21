import { memo } from 'react'

const Hero = memo(() => (
  <div className="hero jumbotron bg-white px-0">
    <div className="row py-5">
      <div className="col-md-10 col-lg-8">
        {/* <h1 className="display-3 font-bebas">DEVERO Corporation</h1> */}

        <h2 className="display-4">We help build<br/> successful products<br/> &amp; companies</h2>

        <p className="h5 font-weight-normal">90% of start-ups and products fail. We will help you be part of those 10% that succeed. With our expertise, you can improve the odds of your success.</p>
      </div>
    </div>
  </div>
))

export default Hero
