import { useCallback, useState, memo } from 'react'
import sanitizeHtml from 'sanitize-html'
import { useIntl } from 'react-intl'
import { z } from 'zod'

import {
  Layout,
  PageHeader,
  FormInput,
  TextArea,
  FormBotCheck,
} from '@components'
import { useFirestore, useToast } from '@contexts'
import { logger } from '@utils'

const schema = z.object({
  email: z.string().email('Please provide a valid email.'),
  message: z.string().min(1, { message: 'Please provide a your message.' }),
  name: z.string().min(1, { message: 'Please provide a your name.' }),
})

const Contact = memo(() => {
  const intl = useIntl()

  const { createEmailDocument } = useFirestore()
  const { handleToastShow } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bot, setBot] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const updateState = useCallback(
    (type: string, payload: string) => {
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
    },
    [bot],
  )

  const submitForm = useCallback(async () => {
    if (!bot) {
      const isValid = schema.parse({
        email,
        message,
        name,
      })

      if (isValid) {
        createEmailDocument(name, email, message)
          .then(() => {
            setName('')
            setEmail('')
            setMessage('')
            setBot(false)
            setNameError(false)
            setEmailError(false)
            setEmailSent(true)
            handleToastShow(
              intl.formatMessage({
                defaultMessage:
                  'Thank you for contacting us. We will contact you soon.',
              }),
              'vulcanSalute',
            )
          })
          .catch((e) => logger(e, 'info'))
      } else {
        if (name.length === 0) {
          setNameError(true)
        }

        if (email.length === 0) {
          setEmailError(true)
        }
      }
    }
  }, [bot, createEmailDocument, email, handleToastShow, intl, message, name])

  return (
    <Layout title="Contact | Devero">
      <PageHeader
        title={intl.formatMessage({ defaultMessage: 'Contact us' })}
      />

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <p>
            {intl.formatMessage({
              defaultMessage:
                'Do you have an idea you want to build? Whether it is a product or a new start-up, we can help you with both. Let&apos;s get in touch and get your idea off the ground.',
            })}
          </p>

          <p>
            {intl.formatMessage({
              defaultMessage:
                'If you have a question about product or startup development send as a message as well. We will do our best to help.',
            })}
          </p>
        </div>
      </div>

      <div className="contact-form mt-3 pb-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="form-row mb-1">
              <div className="col-md-6 mb-md-down-1">
                <FormInput
                  id="formName"
                  label={intl.formatMessage({ defaultMessage: 'Full name:' })}
                  fieldName="name"
                  hasError={nameError}
                  value={name}
                  type="text"
                  errorMessage={intl.formatMessage({
                    defaultMessage: 'Please provide a valid name.',
                  })}
                  onChange={updateState}
                />
              </div>

              <div className="col-md-6">
                <FormInput
                  id="formEmail"
                  fieldName="email"
                  label={intl.formatMessage({ defaultMessage: 'Email:' })}
                  hasError={emailError}
                  value={email}
                  type="text"
                  errorMessage={intl.formatMessage({
                    defaultMessage: 'Please provide a valid email.',
                  })}
                  onChange={updateState}
                />
              </div>
            </div>

            <div className="mt-1">
              <TextArea
                id="formMessage"
                fieldName="message"
                label={intl.formatMessage({
                  defaultMessage: 'Message (optional)',
                })}
                value={message}
                onChange={updateState}
              />

              <FormBotCheck
                id="formBot"
                label={intl.formatMessage({ defaultMessage: 'Are you a bot?' })}
                hasError={nameError}
                onChange={updateState}
              />
            </div>

            {emailSent && (
              <div className="mt-2 mb-2">
                <h5>
                  {intl.formatMessage({
                    defaultMessage:
                      'Thank you for contacting us. We will contact you soon.',
                  })}
                </h5>
              </div>
            )}

            <div className="mt-1">
              <button className="btn w-100" type="button" onClick={submitForm}>
                {intl.formatMessage({ defaultMessage: 'Send email' })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default Contact
