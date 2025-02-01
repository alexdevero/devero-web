import Router from 'next/router'
import { memo, useCallback, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Layout } from '@components/layout'
import { PageHeader } from '@components/page-header'

import { useFirebaseAuth } from '@contexts/firebase-auth'
import { useFirestore } from '@contexts/firestore'
import { useStorage } from '@contexts/storage'

import { EmailRecord } from '@custom-types/firestore'

import { routes } from '@data/routes'

import { logger } from '@utils/logger'

const Dashboard = memo(() => {
  const intl = useIntl()

  const { deleteEmailDocument, getAllEmails } = useFirestore()
  const { authenticatedUser, handleSignOut } = useFirebaseAuth()
  const { getStorageItem } = useStorage()

  const [emails, setEmails] = useState<EmailRecord[] | undefined>([])

  const handleLeaveClick = useCallback(async () => {
    const signOutSuccess = await handleSignOut()

    if (signOutSuccess) {
      Router.push(routes.root)
    }
  }, [handleSignOut])

  useEffect(() => {
    getAllEmails()
      .then((emails) => {
        setEmails(emails)
      })
      .catch((e) => logger(e, 'log'))
  }, [getAllEmails])

  useEffect(() => {
    ;(async () => {
      const localUserData = await getStorageItem('auth', 'local')
      if (!authenticatedUser && !localUserData) {
        Router.push(routes.adminLogin)
      }
    })()
  }, [authenticatedUser, getStorageItem])

  return (
    <Layout title="Admin dashboard | Devero">
      <PageHeader
        title={intl.formatMessage({ defaultMessage: 'Admin dashboard' })}
      />

      <div className="pb-3 text-center">
        <p>
          {intl.formatMessage({ defaultMessage: 'Email count' })}:{' '}
          {emails?.length}
        </p>

        {(emails || [])?.length > 0 ? (
          <>
            <p>{intl.formatMessage({ defaultMessage: 'Emails' })}:</p>

            <ul>
              {(emails || []).map((e) => {
                const id = Object.keys(e)?.[0]
                const emailData = Object.values(e)?.[0]

                return (
                  <li key={id}>
                    {emailData.email}: {emailData.message}
                    <span onClick={() => deleteEmailDocument(id)}>&times;</span>
                  </li>
                )
              })}
            </ul>
          </>
        ) : (
          <p>{intl.formatMessage({ defaultMessage: 'No emails found.' })}</p>
        )}

        <p>
          <span className="link link-underline" onClick={handleLeaveClick}>
            &larr; {intl.formatMessage({ defaultMessage: 'Leave' })}
          </span>
        </p>
      </div>
    </Layout>
  )
})

export default Dashboard
