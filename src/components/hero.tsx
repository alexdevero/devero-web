import { memo, ReactNode } from 'react'
// import { useIntl } from 'react-intl'

export const Hero = memo(() => {
  const intl = {
    formatMessage: (
      args: { defaultMessage: string },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      options?: { br: ReactNode },
    ) => args.defaultMessage,
  } // useIntl()

  return (
    <div className="hero jumbotron px-0">
      <div className="row py-5">
        <div className="col-md-8 col-lg-7">
          {/* <h1 className="display-3 font-bebas">DEVERO Corporation</h1> */}

          <h1 className="h4 display mb-2">
            {intl.formatMessage(
              { defaultMessage: 'We build digital{br} products and solutions' },
              {
                br: <br />,
              },
            )}
          </h1>

          <p className="body1 lead">
            {intl.formatMessage({
              defaultMessage:
                'We are a full-stack software studio that builds digital products and solutions for companies of any size, products optimized for user experience and performance.',
            })}
          </p>
        </div>
      </div>
    </div>
  )
})
