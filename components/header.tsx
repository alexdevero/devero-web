import React from 'react'
import Link from 'next/link'

const handleHeaderLinkClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
}

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul className="header__list-links">
          <li className="dropdown__wrapper">
            <Link href="/brand-portfolio">
              <a className="dropdown__trigger">Brand portfolio</a>
            </Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <a href="https://ai.devero.io/" onClick={handleHeaderLinkClick}>AI</a>
              </li>

              <li className="dropdown__item">
                <a href="https://financial.devero.io/" onClick={handleHeaderLinkClick}>Financial</a>
              </li>

              <li className="dropdown__item">
                <a href="https://foundation.devero.io/" onClick={handleHeaderLinkClick}>Foundation</a>
              </li>

              <li className="dropdown__item">
                <a href="https://galactic.devero.io/" onClick={handleHeaderLinkClick}>Galactic</a>
              </li>

              <li className="dropdown__item">
                <a href="https://genomics.devero.io/" onClick={handleHeaderLinkClick}>Genomics</a>
              </li>

              <li className="dropdown__item">
                <a href="https://industries.devero.io/" onClick={handleHeaderLinkClick}>Industries</a>
              </li>

              <li className="dropdown__item">
                <a href="https://media.devero.io/" onClick={handleHeaderLinkClick}>Media</a>
              </li>

              <li className="dropdown__item">
                <a href="https://robotics.devero.io/" onClick={handleHeaderLinkClick}>Robotics</a>
              </li>

              <li className="dropdown__item">
                <a href="https://security.devero.io/" onClick={handleHeaderLinkClick}>Security</a>
              </li>

              <li className="dropdown__item">
                <a href="https://studio.devero.io/">Studio</a>
              </li>

              <li className="dropdown__item">
                <a href="https://technologies.devero.io/" onClick={handleHeaderLinkClick}>Technologies</a>
              </li>

              <li className="dropdown__item">
                <a href="https://ventures.devero.io/" onClick={handleHeaderLinkClick}>Ventures</a>
              </li>

              <li className="dropdown__item">
                <a href="https://x.devero.io/" onClick={handleHeaderLinkClick}>X</a>
              </li>
            </ul>
          </li>

          <li className="dropdown__wrapper">
            <Link href="/about-us/">
              <a className="dropdown__trigger">Discover DEVERO</a>
            </Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link href="">About us</Link>
              </li>

              <li className="dropdown__item">
                <Link href="">Our story</Link>
              </li>

              <li className="dropdown__item">
                <Link href="">Our brand</Link>
              </li>

              <li className="dropdown__item">
                <Link href="">Our mission</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
              Blog
            </a>
          </li>

          <li>
            <Link href="foundation/">Foundation</Link>
          </li>
        </ul>

        {/* <ul className="header__list-social">
          <li>
            <a href="/" target="_blank">
              <span className="fab fa-facebook-f" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-twitter" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-instagram" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-linkedin" />
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  </header>
)

export default Header
