import { memo } from 'react'

export const CurrentStats = memo(() => (
  <div className="row py-5">
    <div className="col-6 col-md-3 text-center">
      <p className="h4 font-weight-bold font-roboto-condensed m-0">+350k</p>

      <p className="small text-uppercase font-roboto-condensed font-weight-bold mt-1 mb-0">Users</p>
    </div>

    <div className="col-6 col-md-3 text-center">
      <p className="h4 font-weight-bold font-roboto-condensed m-0">4</p>

      <p className="small text-uppercase font-roboto-condensed font-weight-bold mt-1 mb-0">Products</p>
    </div>

    <div className="col-6 col-md-3 text-center mt-md-down-2">
      <p className="h4 font-weight-bold font-roboto-condensed m-0">2</p>

      <p className="small text-uppercase font-roboto-condensed font-weight-bold mt-1 mb-0">Startups</p>
    </div>

    <div className="col-6 col-md-3 text-center mt-md-down-2">
      <p className="h4 font-weight-bold font-roboto-condensed m-0">2</p>

      <p className="small text-uppercase font-roboto-condensed font-weight-bold mt-1 mb-0">Countries</p>
    </div>
  </div>
))
