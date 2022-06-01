import { memo, useCallback, useState } from 'react'
import Router from 'next/router'

import { FormInput } from '../../components/form-input'
import { Layout } from '../../components/layout'
import { PageHeader } from '../../components/page-header'
import { adminCredentials } from '../../data/admin-credentials'

const AdminLogin = memo(() => {
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
  const handleLogin = useCallback(() => {
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

      if (adminCredentials.username === username && adminCredentials.password === password) {
        setUsernameError(false)
        setPasswordError(false)

        Router.push('/admin/dashboard')
      } else {
        if (adminCredentials.username !== username) {
          setUsernameError(true)
        }

        if (adminCredentials.password !== password) {
          setPasswordError(true)
        }
      }
    }
  }, [username, password])

  return (
    <Layout title="Admin login | Devero">
      <PageHeader title="Admin login" />

      <div className="row justify-content-center pb-3">
        <div className="col-md-8 col-lg-5">
          <div>
            <FormInput
              id="username"
              fieldName="username"
              label="Username"
              value={username}
              errorMessage="Incorrect username or password"
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
              errorMessage="Incorrect username or password"
              hasError={passwordError}
              type="password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mt-1">
            <button type="button" className="btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default AdminLogin
