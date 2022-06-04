import { useCallback, useState, memo } from 'react'
import sanitizeHtml from 'sanitize-html'
import * as yup from 'yup'

import { Layout } from '../components/layout'
import { PageHeader } from '../components/page-header'
import { FormInput } from '../components/form-input'
import { TextArea } from '../components/text-area'
import { FormBotCheck } from '../components/form-bot-check'

import { useFirestore } from '../contexts/firestore'
import { useToast } from '../contexts/toasts'

import { logger } from '../utils/logger'

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string(),
  name: yup.string().required(),
})

const Contact = memo(() => {
  const { createEmailDocument } = useFirestore()
  const { handleToastShow } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bot, setBot] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const updateState = useCallback((type: string, payload: string) => {
    setEmailSent(false)

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
  }, [bot])

  const submitForm = useCallback(async () => {
    if (!bot) {
      const isFormValid = await formSchema.isValid({
        email,
        message,
        name,
      }).catch(e => logger(e, 'log'))

      if (isFormValid) {
        createEmailDocument(name, email, message)
          .then(() => {
            setName('')
            setEmail('')
            setMessage('')
            setBot(false)
            setNameError(false)
            setEmailError(false)
            setEmailSent(true)
            handleToastShow('Thank you for contacting us. We will contact you soon.', 'vulcanSalute')
          })
          .catch(e => logger(e, 'info'))
      } else {
        if (name.length === 0) {
          setNameError(true)
        }

        if (email.length === 0) {
          setEmailError(true)
        }
      }
    }
  }, [bot, createEmailDocument, email, handleToastShow, message, name])

  return (
    <Layout title="Contact | Devero">
      <PageHeader title="Contact us" />

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <p>Do you have an idea you want to build? Whether it is a product or a new start-up, we can help you with both. Let&apos;s get in touch and get your idea off the ground.</p>

          <p>If you have a question about product or startup development send as a message as well. We will do our best to help.</p>
        </div>
      </div>

      <div className="contact-form mt-3 pb-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="form-row mb-1">
              <div className="col-md-6 mb-md-down-1">
                <FormInput
                  id="formName"
                  label="Full name:"
                  fieldName="name"
                  hasError={nameError}
                  value={name}
                  type="text"
                  errorMessage="Please provide a valid name."
                  onChange={updateState}
                />
              </div>

              <div className="col-md-6">
                <FormInput
                  id="formEmail"
                  fieldName="email"
                  label="Email:"
                  hasError={emailError}
                  value={email}
                  type="text"
                  errorMessage="Please provide a valid email."
                  onChange={updateState}
                />
              </div>
            </div>

            <div className="mt-1">
              <TextArea
                id="formMessage"
                fieldName="message"
                label="Message (optional)"
                value={message}
                onChange={updateState}
              />

              <FormBotCheck
                id="formBot"
                label="Are you a bot?"
                hasError={nameError}
                onChange={updateState}
              />
            </div>

            {emailSent && (
              <div className="mt-2 mb-2">
                <h5>Thank you for contacting us. We will contact you soon.</h5>
              </div>
            )}

            <div className="mt-1">
              <button className="btn w-100" type="button" onClick={submitForm}>Send email</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default Contact
