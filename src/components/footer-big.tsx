import Link from 'next/link'
import { memo, useMemo } from 'react'
import { useIntl } from 'react-intl'

import { personalLinks, routes, socialMediaLinks } from '@data'

export const FooterBig = memo(() => {
  const intl = useIntl()

  const timeStamp = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="footer footer--big bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <p className="m-0 body2 font-weight-bold">
              {intl.formatMessage({ defaultMessage: 'Say hello at' })}{' '}
              <a
                href={personalLinks.mailto}
                className="text-body text-underline"
              >
                hello@devero.io
              </a>
            </p>

            <ul className="nav mt-1 mb-1 d-flex justify-content-flex-start">
              <li className="nav-item">
                <a
                  href={socialMediaLinks.twitter}
                  className="nav-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-twitter" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href={socialMediaLinks.linkedin}
                  className="nav-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={socialMediaLinks.facebook}
                  className="nav-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-facebook-f" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href={socialMediaLinks.github}
                  className="nav-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-github" />
                </a>
              </li>
            </ul>

            <p className="mt-1 mb-0 small">
              &copy;{timeStamp} Devero Corporation.{' '}
              {intl.formatMessage({ defaultMessage: 'All rights reserved.' })}
            </p>
          </div>

          <div className="col-md-6 col-lg-7 mt-md-down-2">
            <div className="row">
              <div className="col-md-6">
                <ul className="nav d-flex flex-column small">
                  <li className="body2 font-weight-bold nav-item">
                    {intl.formatMessage({ defaultMessage: 'Links' })}
                  </li>

                  {/* <li className="nav-item">
                    <Link href="/about-us/">
                      <a className="nav-link p-1">{intl.formatMessage({ defaultMessage: 'About us' })}</a>
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link href="/changelog/">
                      <a className="nav-link p-1">{intl.formatMessage({ defaultMessage: 'Changelog' })}</a>
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href={routes.contact}
                      className="nav-link p-1"
                      legacyBehavior
                    >
                      {intl.formatMessage({ defaultMessage: 'Contact us' })}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={routes.privacyPolicy}
                      className="nav-link p-1"
                      legacyBehavior
                    >
                      {intl.formatMessage({ defaultMessage: 'Privacy policy' })}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={routes.termsConditions}
                      className="nav-link p-1"
                      legacyBehavior
                    >
                      {intl.formatMessage({
                        defaultMessage: 'Terms and conditions',
                      })}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link p-1"
                      href={personalLinks.blog}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {intl.formatMessage({ defaultMessage: 'Blog' })}
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={routes.adminLogin}
                      className="nav-link p-1"
                      legacyBehavior
                    >
                      {intl.formatMessage({ defaultMessage: 'Admin' })}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 mt-md-down-2">
                <ul className="nav d-flex flex-column small">
                  <li className="body2 font-weight-bold nav-item p-1">
                    {intl.formatMessage({ defaultMessage: 'Prague' })}
                  </li>

                  <li className="nav-item p-1">Pankrác</li>

                  <li className="nav-item p-1">Praha 4, 140 00</li>

                  <li className="nav-item p-1">
                    {intl.formatMessage({ defaultMessage: 'Czech Republic' })}
                  </li>

                  <li className="nav-item p-1">
                    <a
                      href={personalLinks.mailto}
                      className="text-body border-bottom border-dark"
                    >
                      hello@devero.io
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})
