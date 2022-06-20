import { memo, useCallback, useEffect, useState } from 'react'
import Router from 'next/router'
import { useIntl } from 'react-intl'

import { FormInput } from '@../components/form-input'
import { Layout } from '@../components/layout'
import { PageHeader } from '@../components/page-header'

import { useFirebaseAuth } from '@../contexts/firebase-auth'

import { routes } from '@../data/routes'

const AdminLogin = memo(() => {
  const intl = useIntl()

  const { authenticatedUser, handleSignIn } = useFirebaseAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleUsernameChange = useCallback((field: string, value: string) => {
    setUsername(value)
  }, [])
  const handlePasswordChange = useCallback((field: string, value: string) => {
    setPassword(value)
  }, [])
  const handleLogin = useCallback(async () => {
    if (username.length === 0 && password.length === 0) {
      setUsernameError(true)
      setPasswordError(true)
    } else if (username.length === 0) {
      setUsernameError(true)
    } else if (password.length === 0) {
      setPasswordError(true)
    } else {
      setUsernameError(false)
      setPasswordError(false)

      const signInSuccess = await handleSignIn(username, password)

      if (signInSuccess) {
        setUsernameError(false)
        setPasswordError(false)

        Router.push(routes.adminDashboard)
      } else {
        setUsernameError(true)
        setPasswordError(true)
      }
    }
  }, [username, password, handleSignIn])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'enter') {
        handleLogin()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleLogin])

  useEffect(() => {
    if (authenticatedUser) {
      Router.push(routes.adminDashboard)
    }
  }, [authenticatedUser])

  return (
    <Layout title="Admin login | Devero">
      <PageHeader title={intl.formatMessage({ defaultMessage: 'Admin login' })} />

      <div className="row justify-content-center pb-3">
        <div className="col-md-8 col-lg-5">
          <div>
            <FormInput
              id="username"
              fieldName="username"
              label="Username"
              value={username}
              errorMessage={intl.formatMessage({ defaultMessage: 'Incorrect username or password' })}
              hasError={usernameError}
              type="text"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mt-1">
            <FormInput
              id="Password"
              fieldName="password"
              label="Password"
              value={password}
              errorMessage={intl.formatMessage({ defaultMessage: 'Incorrect username or password' })}
              hasError={passwordError}
              type="password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mt-1">
            <button type="button" className="btn" onClick={handleLogin}>{intl.formatMessage({ defaultMessage: 'Login' })}</button>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default AdminLogin
