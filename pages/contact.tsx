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
        setNameError(false)
        break
      case 'email':
        setEmail(sanitizeHtml(payload))
        setEmailError(false)
        break
      case 'message':
        setMessage(sanitizeHtml(payload))
        break
    }
  }

  const submitForm = () => {
    if (name.length > 0 && email.length > 0) {
      setNameError(false)

      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        setEmailError(false)

        // Process and send the email
        console.log(name, email, message)
      } else {
        setEmailError(true)
      }
    } else {
      if (name.length === 0) {
        setNameError(true)
      }

      if (email.length === 0) {
        setEmailError(true)
      }
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
              className={`form-control${nameError ? ' is-invalid' : ''}`}
              name="formName"
              id="formName"
              onChange={(event: InputEvent) => updateState('name', event.currentTarget.value)}
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
              className={`form-control${emailError ? ' is-invalid' : ''}`}
              name="formEmail"
              id="formEmail"
              onChange={(event: InputEvent) => updateState('email', event.currentTarget.value)}
            />

            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="formEmail">Message (optional)</label>

          <textarea
            className="form-control"
            name="formMessage"
            id="formMessage"
            onChange={(event: HTMLTextAreaElement) => updateState('message', event.value)}
          />
        </div>

        <div>
          <button type="button" onClick={submitForm}>Send email</button>
        </div>
      </div>
    </Layout>
  )
}
