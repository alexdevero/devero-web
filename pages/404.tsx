import { memo } from 'react'
import { useIntl } from 'react-intl'

import { Layout } from '@components'

const NotFoundPage = memo(() => {
  const intl = useIntl()

  return (
    <Layout title='404 - Not Found'>
      <div className="text--center d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="h5">{intl.formatMessage({ defaultMessage: 'NOT FOUND' })}</h1>

        <p className="body2">{intl.formatMessage({ defaultMessage: 'You just hit a route that doesn\'t exist...{br}probably some bug in the Matrix.' }, { br: <br /> })}</p>
      </div>
    </Layout>
  )
})

export default NotFoundPage
