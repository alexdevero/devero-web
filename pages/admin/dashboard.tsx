import { memo, useCallback } from 'react'
import Router from 'next/router'

import { Layout } from '../../components/layout'
import { PageHeader } from '../../components/page-header'

const Dashboard = memo(() => {
  const handleLeaveClick = useCallback(() => {
    Router.push('/')
  }, [])

  return (
    <Layout title="Admin dashboard | Devero">
      <PageHeader title="Admin dashboard" />

      <div className="pb-3 text-center">
        <p>Nothing to see yet</p>

        <p><span className="link link-underline" onClick={handleLeaveClick}>Leave</span></p>
      </div>
    </Layout>
  )
})

export default Dashboard
