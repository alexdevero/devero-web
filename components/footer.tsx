// import Link from 'next/link'
import { memo } from 'react'

export const Footer = memo(() => (
  <footer className="footer bg-black">
    <div className="container">
      {/* <div>
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <Link href="/about-us/">
              <a className="nav-link"><small>About us</small></a>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
              <small>Blog</small>
            </a>
          </li>

          <li className="nav-item">
            <Link href="/privacy-policy/">
              <a className="nav-link"><small>Privacy policy</small></a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/terms-conditions/">
              <a className="nav-link"><small>Terms &amp; conditions</small></a>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="mt-1">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <a
              href="https://twitter.com/alexdevero"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-twitter" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://cz.linkedin.com/in/alexdevero"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-linkedin" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://facebook.com/deverocorp"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-facebook-f" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://github.com/alexdevero"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
))
