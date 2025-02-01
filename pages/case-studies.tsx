import Link from 'next/link'
import { memo } from 'react'
import { useIntl } from 'react-intl'

import { Layout, PageHeader } from '@components'
import { routes } from '@data'

const CaseStudies = memo(() => {
  const intl = useIntl()

  return (
    <Layout title="Case studies | Devero">
      <PageHeader
        title={intl.formatMessage({ defaultMessage: 'Case studies' })}
      />
      <div className="container pb-3">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <p className="mt-0 mb-2">
              {intl.formatMessage({
                defaultMessage: 'This page is under construction...',
              })}
            </p>

            <Link href={routes.root} legacyBehavior>
              ←{intl.formatMessage({ defaultMessage: 'Go back home' })}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default CaseStudies
