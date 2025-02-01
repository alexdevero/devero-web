import { memo } from 'react'

export const RoadMap = memo(() => (
  <div className="py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-7 col-xl*6">
        <div className="text-center mb-4">
          <h1 className="h2 mb-2">How it works</h1>

          <p>
            Our product development method is based on a well-tested
            step-by-step process. This process focuses on stress-testing the
            idea, while spending the least amount of resources, before
            proceeding to more risky steps.
          </p>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <div className="roadmap-box position-relative">
          <div className="roadmap-box-content bg-white border border-2 border-dark position-relative p-3">
            <h3 className="text-muted small mb-0">Step 1</h3>

            <h2 className="h5 font-weight-bolder">Validate</h2>

            <ul className="list-unstyled m-0">
              <li>&mdash; Validate product idea</li>
              <li>&mdash; Research market</li>
              <li>&mdash; Target users</li>
            </ul>
          </div>

          <div className="roadmap-box-bcg h-100 w-100 position-absolute bg-warning" />
        </div>

        <div className="h2 text-black-50 text-center mt-2 mb-3">&darr;</div>

        <div className="roadmap-box position-relative">
          <div className="roadmap-box-content bg-white border border-2 border-dark position-relative p-3">
            <h3 className="text-muted small mb-0">Step 2</h3>

            <h2 className="h5 font-weight-bolder">Specify</h2>

            <ul className="list-unstyled m-0">
              <li>&mdash; Create product definition</li>
              <li>&mdash; Create MVP specification</li>
              <li>&mdash; Specify MVP scope (features)</li>
              <li>&mdash; Assess product positioning</li>
              <li>&mdash; Test pricing sensitivity</li>
              <li>&mdash; Test channel</li>
            </ul>
          </div>

          <div className="roadmap-box-bcg h-100 w-100 position-absolute bg-primary" />
        </div>

        <div className="h2 text-black-50 text-center mt-2 mb-3">&darr;</div>

        <div className="roadmap-box position-relative">
          <div className="roadmap-box-content bg-white border border-2 border-dark position-relative p-3">
            <h3 className="text-muted small mb-0">Step 3</h3>

            <h2 className="h5 font-weight-bolder">Prototype</h2>

            <ul className="list-unstyled m-0">
              <li>&mdash; Create MVP</li>
              <li>&mdash; Front-end development</li>
              <li>&mdash; Back-end development</li>
              <li>&mdash; iOS development</li>
              <li>&mdash; Android development</li>
            </ul>
          </div>

          <div className="roadmap-box-bcg h-100 w-100 position-absolute bg-info" />
        </div>

        <div className="h2 text-black-50 text-center mt-2 mb-3">&darr;</div>

        <div className="roadmap-box position-relative">
          <div className="roadmap-box-content bg-white border border-2 border-dark position-relative p-3">
            <h3 className="text-muted small mb-0">Step 4</h3>

            <h2 className="h5 font-weight-bolder">Launch</h2>

            <ul className="list-unstyled m-0">
              <li>&mdash; Gather customer feedback</li>
              <li>&mdash; Develop post-launch roadmap</li>
              <li>&mdash; Optimize customer onboarding process</li>
            </ul>
          </div>

          <div className="roadmap-box-bcg h-100 w-100 position-absolute bg-success" />
        </div>

        <div className="h2 text-black-50 text-center mt-2 mb-3">&darr;</div>

        <div className="roadmap-box position-relative">
          <div className="roadmap-box-content bg-white border border-2 border-dark position-relative p-3">
            <h3 className="text-muted small mb-0">Step 5</h3>

            <h2 className="h5 font-weight-bolder">Scale</h2>

            <ul className="list-unstyled m-0">
              <li>&mdash; Build product team</li>
              <li>&mdash; Establish operational processes</li>
              <li>&mdash; Expand product&apos;s core functionalities</li>
            </ul>
          </div>

          <div className="roadmap-box-bcg h-100 w-100 position-absolute bg-danger" />
        </div>
      </div>
    </div>
  </div>
))
