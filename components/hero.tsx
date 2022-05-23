import { memo } from 'react'

export const Hero = memo(() => (
  <div className="hero jumbotron bg-white px-0">
    <div className="row py-5">
      <div className="col-md-8 col-lg-6">
        {/* <h1 className="display-3 font-bebas">DEVERO Corporation</h1> */}

        <h2 className="display-4 mb-2">We build products people love</h2>

        <p className="h5 font-weight-normal">90% of start-ups fail. One thing that can cause failure is product. We will help you create and deliver product your users will love. With our expertise, you can improve the odds of success and be part of those 10% that succeed.</p>
      </div>
    </div>
  </div>
))
