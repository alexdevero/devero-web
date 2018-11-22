import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul className="header__list-links">
          <li className="dropdown__wrapper">
            <Link to="/brand-portfolio" className="dropdown__trigger">
              Brand portfolio
            </Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="/devero-aI/">AI</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-financial/">Financial</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-foundation/">Foundation</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-galactic/">Galactic</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-genomics/">Genomics</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-industries/">Industries</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-media/">Media</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-studio/">Studio</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-technologies/">Technologies</Link>
              </li>

              <li className="dropdown__item">
                <Link to="/devero-ventures/">Ventures</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown__wrapper">
            <Link to="/about-us/" className="dropdown__trigger">Discover DEVERO</Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="">About us</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our story</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our brand</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our mission</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">Blog</a>
          </li>

          <li>
            <Link to="/foundation/">Foundation</Link>
          </li>
        </ul>

        <ul className="header__list-social">
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
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
