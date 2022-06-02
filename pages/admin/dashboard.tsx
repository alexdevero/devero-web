import Router from 'next/router'
import { memo, useCallback, useEffect, useState } from 'react'

import { Layout } from '../../components/layout'
import { PageHeader } from '../../components/page-header'

import { useFirebaseAuth } from '../../contexts/firebase-auth'
import { useFirestore } from '../../contexts/firestore'

import { EmailRecord } from '../../types/firestore'

import { logger } from '../../utils/logger'

const Dashboard = memo(() => {
  const { deleteEmailDocument, getAllEmails } = useFirestore()
  const { handleSignOut } = useFirebaseAuth()

  const [emails, setEmails] = useState<EmailRecord[]>([])

  const handleLeaveClick = useCallback(async () => {
    const signOutSuccess = await handleSignOut()

    if (signOutSuccess) {
      Router.push('/')
    }
  }, [handleSignOut])

  useEffect(() => {
    getAllEmails()
      .then(emails => {
        setEmails(emails)
      })
      .catch(e => logger(e, 'log'))
  }, [getAllEmails])

  return (
    <Layout title="Admin dashboard | Devero">
      <PageHeader title="Admin dashboard" />

      <div className="pb-3 text-center">
        <p>Email count: {emails?.length}</p>

        {emails?.length > 0 ? (
          <>
            <p>Emails:</p>

            <ul>
              {emails.map((e) => {
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
          <p>No emails found.</p>
        )}

        <p><span className="link link-underline" onClick={handleLeaveClick}>&larr; Leave</span></p>
      </div>
    </Layout>
  )
})

export default Dashboard
