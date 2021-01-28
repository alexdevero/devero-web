import { useState } from 'react'
import sanitizeHtml from 'sanitize-html'

import Layout from '../components/layout'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

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
      <h1>Contact us</h1>

      <p>Do you have an idea for a new product? Do you want to start a new start-up, or even build a new unicorn? Let&apos;s get in touch!</p>

      <div className="contact-form">
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="formName">Full name:</label>

            <input
              required
              type="text"
              className="form-control"
              name="formName"
              id="formName"
              onChange={(event: HTMLInputElement) => updateState('name', event.value)}
            />

            <div className="invalid-feedback">
              Please provide a valid name.
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="formEmail">Email:</label>

            <input
              required
              type="text"
              className="form-control"
              name="formEmail"
              id="formEmail"
              onChange={(event: HTMLInputElement) => updateState('email', event.value)}
            />

            <div className="invalid-feedback">
              Please select a valid email.
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="formEmail">Message (optional)</label>

          <textarea
            name="formMessage"
            id="formMessage"
            onChange={(event: HTMLTextAreaElement) => updateState('message', event.value)}
          />
        </div>
      </div>
    </Layout>
  )
}
