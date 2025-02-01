'use client'

// import { useIntl } from 'react-intl'

import { Layout } from '@components'
import { ReactNode, useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const intl = {
    formatMessage: (
      args: { defaultMessage: string },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      options?: { br: ReactNode },
    ) => args.defaultMessage,
  } // useIntl()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Layout title="404 - Not Found">
      <div className="text--center d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="h5">
          {intl.formatMessage({ defaultMessage: 'NOT FOUND' })}
        </h1>

        <p className="body2">
          {intl.formatMessage(
            {
              defaultMessage:
                "You just hit a route that doesn't exist...{br}probably some bug in the Matrix.",
            },
            { br: <br /> },
          )}
        </p>

        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </Layout>
  )
}
