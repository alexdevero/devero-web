import { memo } from 'react'
import { useIntl } from 'react-intl'

import { Layout, PageHeader } from '@components'

const Services = memo(() => {
  const intl = useIntl()

  return (
    <Layout title="Services | Devero">
      <PageHeader title={intl.formatMessage({ defaultMessage: 'Services' })} />
    </Layout>
  )
})

Services.displayName = 'Services'

export default Services
