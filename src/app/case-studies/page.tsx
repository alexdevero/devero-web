// import { useIntl } from 'react-intl'

import { Layout, PageHeader } from '@components'

export default function CaseStudies() {
  const intl = {
    formatMessage: (args: { defaultMessage: string }) => args.defaultMessage,
  } // useIntl()

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
          </div>
        </div>
      </div>
    </Layout>
  )
}
