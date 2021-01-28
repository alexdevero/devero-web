import { useState } from 'react'
import sanitizeHtml from 'sanitize-html'

import Layout from '../components/layout'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const updateState = (type: String, payload: String) => {
    switch (type) {
      case 'name':
        setName(sanitizeHtml(payload))
        break
      case 'email':
        setEmail(sanitizeHtml(payload))
        break
      case 'message':
        setMessage(sanitizeHtml(payload))
        break
    }
  }

  return (
    <Layout title="Contact | Devero">
      <h1>Hi from the Contact page</h1>
    </Layout>
  )
}
