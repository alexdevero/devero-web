import React from 'react'
import Link from 'next/link'

const handleFooterLinkClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
}

const Footer = () => (
  <footer className="footer bg-black">
    <div className="container">
      <div>
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">DEVERO</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about-us/">
              <a className="nav-link">About us</a>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
              Blog
            </a>
          </li>

          <li className="nav-item">
            <Link href="/privacy-policy/">
              <a className="nav-link">Privacy policy</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/terms-conditions/">
              <a className="nav-link">Terms &amp; conditions</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-2">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <a href="https://twitter.com/alexdevero" className="nav-link" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-twitter" />
            </a>
          </li>

          <li className="nav-item">
            <a href="https://cz.linkedin.com/in/alexdevero" className="nav-link" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-linkedin" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://facebook.com/deverocorp" className="nav-link" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-facebook-f" />
            </a>
          </li>

          <li className="nav-item">
            <a href="https://github.com/alexdevero" className="nav-link" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
