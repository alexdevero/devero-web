import React from 'react'
import Link from 'next/link'

const handleFooterLinkClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul className="footer__list-links">
            <li>
              <Link href="/">DEVERO</Link>
            </li>

            <li>
              <Link href="/about-us/">About us</Link>
            </li>

            {/* <li>
              <Link href="/brand-portfolio/">Brand portfolio</Link>
            </li> */}

            <li>
              <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
                Blog
              </a>
            </li>

            <li>
              <Link href="/foundation/">Foundation</Link>
            </li>

            <li>
              <Link href="/privacy-policy/">Privacy policy</Link>
            </li>

            <li>
              <Link href="/terms-conditions/">Terms and conditions</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="footer__list-links">
            <li>
              <a href="https://ai.devero.io/" onClick={handleFooterLinkClick}>AI</a>
            </li>

            <li>
              <a href="https://financial.devero.io/" onClick={handleFooterLinkClick}>Financial</a>
            </li>

            <li>
              <a href="https://foundation.devero.io/" onClick={handleFooterLinkClick}>Foundation</a>
            </li>

            <li>
              <a href="https://galactic.devero.io/" onClick={handleFooterLinkClick}>Galactic</a>
            </li>

            <li>
              <a href="https://genomics.devero.io/" onClick={handleFooterLinkClick}>Genomics</a>
            </li>

            <li>
              <a href="https://industries.devero.io/" onClick={handleFooterLinkClick}>Industries</a>
            </li>

            <li>
              <a href="https://media.devero.io/" onClick={handleFooterLinkClick}>Media</a>
            </li>

            <li>
              <a href="https://robotics.devero.io/" onClick={handleFooterLinkClick}>Robotics</a>
            </li>

            <li>
              <a href="https://security.devero.io/" onClick={handleFooterLinkClick}>Security</a>
            </li>

            <li>
              <a href="https://studio.devero.io/">Studio</a>
            </li>

            <li>
              <a href="https://technologies.devero.io/" onClick={handleFooterLinkClick}>Technologies</a>
            </li>

            <li>
              <a href="https://ventures.devero.io/" onClick={handleFooterLinkClick}>Ventures</a>
            </li>

            <li>
              <a href="https://x.devero.io/" onClick={handleFooterLinkClick}>X</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="footer__list-social">
            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-facebook-f" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-twitter" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-instagram" />
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
