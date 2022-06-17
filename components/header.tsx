import { useState, memo } from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

// import { personalLinks } from '../data/links'
import { routes } from '../data/routes'

export const Header = memo(() => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const intl = useIntl()

  return (
    <header className="header bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light px-0">
          <Link href={routes.root}><a className="navbar-brand font-bebas">DEVERO</a></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse justify-content-end${isNavOpen ? ' show' : ''}`} id="navbarMain">
            <ul className="nav">
              {/* <li className="nav-item">
                <Link href={routes.services}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'Services' })}</a>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link href={routes.caseStudies}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'Case studies' })}</a>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link href={routes.portfolio}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'Our work' })}</a>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href={routes.aboutUs}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'About us' })}</a>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href={routes.careers}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'Careers' })}</a>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link href={routes.contact}>
                  <a className="nav-link">{intl.formatMessage({ defaultMessage: 'Contact us' })}</a>
                </Link>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href={personalLinks.blog} rel="noopener noreferrer" target="_blank">
                  {intl.formatMessage({ defaultMessage: 'Blog' })}
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
})
