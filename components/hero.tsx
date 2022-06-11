import { memo } from 'react'
import { useIntl } from 'react-intl'

export const Hero = memo(() => {
  const intl = useIntl()

  return (
    <div className="hero jumbotron px-0">
      <div className="box" />

      <div className="row py-5">
        <div className="col-md-8 col-lg-7">
          {/* <h1 className="display-3 font-bebas">DEVERO Corporation</h1> */}

          <h1 className="h4 display mb-2">
            {intl.formatMessage({ defaultMessage: 'Next-level digital{br} products and solutions' }, {
              br: <br />
            })}
          </h1>

          <p className="body1 lead">{intl.formatMessage({ defaultMessage: 'We are a full-stack software studio that builds digital products and solutions for customer-centric companies, products optimized for user experience and performance.' })}</p>
        </div>
      </div>
    </div>
  )
})
