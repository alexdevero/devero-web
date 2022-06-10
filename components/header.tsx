import { useState, memo } from 'react'
import Link from 'next/link'

import { personalLinks } from '../data/links'

export const Header = memo(() => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="header bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light px-0">
          <Link href="/"><a className="navbar-brand font-bebas">DEVERO</a></Link>

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
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Our work</a>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/about-us">
                  <a className="nav-link">About us</a>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Careers</a>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact us</a>
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={personalLinks.blog} rel="noopener noreferrer" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
})
