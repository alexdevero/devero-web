import { useState } from 'react'
import Layout from '../components/layout'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const updateState = (type: String, payload: String) => {
    switch (type) {
      case 'name':
        setName(payload)
        break
      case 'email':
        setEmail(payload)
        break
      case 'message':
        setMessage(payload)
        break
    }
  }

  return (
    <Layout title="Contact | Devero">
      <h1>Hi from the Contact page</h1>
    </Layout>
  )
}
