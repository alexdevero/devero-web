import { memo, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { ChangelogItem, ChangelogResponse } from '../types/changelog'
import { HttpCodes } from '../types/http-codes'

import { Layout } from './../components/layout'
import { PageHeader } from './../components/page-header'

import { logger } from '../utils/logger'

const Changelog = memo(() => {
  const intl = useIntl()

  const [changelog, setChangelog] = useState<ChangelogItem[]>([])

  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const res = await fetch('/api/changelog')
        const data: ChangelogResponse = await res.json()

        if (data.code === HttpCodes.OK && data.data) {
          setChangelog(data.data)
        }
      } catch (e) {
        logger(e, 'log')
      }
    }

    fetchChangelog()
  }, [])

  return (
    <Layout title="Changelog | Devero">
      <PageHeader title={intl.formatMessage({ defaultMessage: 'Changelog' })} />

      <div className="row justify-content-center pb-3">
        <div className="col-md-8 col-lg-5">
          {changelog.length === 0 ? (
            <p className="text--center">{intl.formatMessage({ defaultMessage: 'Nothing to see yet...' })}</p>
          ) : (
            <ul>
              {changelog.map(change => (
                <li key={`change_${change.version}`}>
                  <span>v{change.version} - {change.title}</span>
                  {change.changes && (
                    <ul>
                      {change.changes.map(item => (
                        <li key={item.id}>{item.text}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
})

export default Changelog
