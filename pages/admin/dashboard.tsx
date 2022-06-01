import Router from 'next/router'
import { memo, useCallback, useEffect, useState } from 'react'

import { Layout } from '../../components/layout'
import { PageHeader } from '../../components/page-header'
import { useFirestore } from '../../contexts/firestore'

import { EmailRecord } from '../../types/firestore'

const Dashboard = memo(() => {
  const { getAllEmails } = useFirestore()

  const [emails, setEmails] = useState<EmailRecord[]>([])

  const handleLeaveClick = useCallback(() => {
    Router.push('/')
  }, [])

  useEffect(() => {
    getAllEmails()
      .then(emails => {
        setEmails(emails)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <Layout title="Admin dashboard | Devero">
      <PageHeader title="Admin dashboard" />

      <div className="pb-3 text-center">
        <p>Email count: {emails?.length}</p>

        <p>Emails:</p>

        {emails?.length > 0 && (
          <ul>
            {emails.map((e) => {
              const id = Object.keys(e)?.[0]
              const emailData = Object.values(e)?.[0]

              return (
                <li key={id}>
                  {emailData.email}: {emailData.message}
                </li>
              )
            })}
          </ul>
        )}

        <p><span className="link link-underline" onClick={handleLeaveClick}>Leave</span></p>
      </div>
    </Layout>
  )
})

export default Dashboard
