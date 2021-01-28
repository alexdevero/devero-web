import { useState, ChangeEvent } from 'react'
import sanitizeHtml from 'sanitize-html'
import { ajax } from 'jquery'

import Layout from '../components/layout'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bot, setBot] = useState(false)
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
      case 'bot':
        setBot(!bot)
        break
    }
  }

  const submitForm = () => {
    if (!bot) {
      if (name.length > 0 && email.length > 0) {
        setNameError(false)

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
          setEmailError(false)

          // Process and send the email
          setTimeout(() => {
            ajax({
              data: {
                name: name,
                email: email,
                message: message
              },
              type: 'POST',
              url: './contact.php',
              success: function(data) {
                console.info(data)
              },
              error: function(xhr, status, err) {
                console.log(xhr)
                console.error(status, err.toString())
              }
            })

            // Reset states
            setName('')
            setEmail('')
            setMessage('')
            setBot(false)
            setNameError(false)
            setEmailError(false)
          }, 1000)
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
  }

  return (
    <Layout title="Contact | Devero">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <h1>Contact us</h1>

          <p className="mt-3">Do you have an idea for a new product? Do you want to start a new start-up, or even build a new unicorn? Let&apos;s get in touch!</p>
          <p>Do you have a question about product or startup development? Send as a message as well. We will do our best to help.</p>
        </div>
      </div>

      <div className="contact-form mt-3">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="form-row mb-1">
              <div className="col-md-6 mb-md-down-1">
                <label htmlFor="formName">Full name:</label>

                <input
                  required
                  type="text"
                  className={`form-control${nameError ? ' is-invalid' : ''}`}
                  name="formName"
                  id="formName"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateState('name', event.target.value)}
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
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateState('email', event.target.value)}
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
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateState('message', event.target.value)}
              />

              <div className="d-none" aria-hidden="true">
                <label htmlFor="formBot">Are you a bot?</label>
                <input
                  type="checkbox"
                  className={`form-control${nameError ? ' is-invalid' : ''}`}
                  name="formBot"
                  id="formBot"
                  onClick={() => updateState('bot', '')}
                />
              </div>
            </div>

            <div className="mt-1">
              <button className="btn w-100" type="button" onClick={submitForm}>Send email</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
