import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul className="header__list-links">
          <li>
            <Link to="/about-us/">About us</Link>
          </li>

          <li>
            <Link to="/brand-portfolio">Brand portfolio</Link>
          </li>

          <li>
            <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
              Blog
            </a>
          </li>

          <li>
            <Link to="/foundation/">Foundation</Link>
          </li>
        </ul>

        <ul className="header__list-social">
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
      </nav>
    </div>
  </header>
)

export default Header
