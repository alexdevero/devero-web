import React from 'react'
import Link from 'next/link'

const handleHeaderLinkClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
}

const Header = () => (
  <header className="header bg-black">
    <div className="container">
      <nav className="navbar navbar-dark">
        <Link href="/"><a className="navbar-brand font-bebas">DEVERO</a></Link>

        <ul className="nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">About us</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Services</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Our work</a>
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Careers</a>
            </Link>
          </li> */}

          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
