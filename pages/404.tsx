import { memo } from 'react'
import { useIntl } from 'react-intl'

import { Layout } from '../components/layout'

const NotFoundPage = memo(() => {
  const intl = useIntl()

  return (
    <Layout title='404 - Not Found'>
      <h1>{intl.formatMessage({ defaultMessage: 'NOT FOUND' })}</h1>

      <p>{intl.formatMessage({ defaultMessage: 'You just hit a route that doesn\'t exist... the sadness.' })}</p>
    </Layout>
  )
})

export default NotFoundPage
