// import { useIntl } from 'react-intl'

import { Layout, PageHeader } from '@components'

export default function Services() {
  const intl = {
    formatMessage: (args: { defaultMessage: string }) => args.defaultMessage,
  } // useIntl()

  return (
    <Layout title="Services | Devero">
      <PageHeader title={intl.formatMessage({ defaultMessage: 'Services' })} />
    </Layout>
  )
}
