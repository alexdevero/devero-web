import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="header bg-black">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
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
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">About us</a>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Our work</a>
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
                <a className="nav-link" href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
