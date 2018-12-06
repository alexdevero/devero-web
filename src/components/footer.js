import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
      <div className="col-md-4">
          <ul className="footer__list-links">
            <li>
              <Link to="/">DEVERO</Link>
            </li>

            <li>
              <Link to="/about-us/">About us</Link>
            </li>

            {/* <li>
              <Link to="/brand-portfolio/">Brand portfolio</Link>
            </li> */}

            <li>
              <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">
                Blog
              </a>
            </li>

            <li>
              <Link to="/foundation/">Foundation</Link>
            </li>

            <li>
              <Link to="/privacy-policy/">Privacy policy</Link>
            </li>

            <li>
              <Link to="/terms-conditions/">Terms and conditions</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="footer__list-links">
            <li>
              <Link to="/ai/">AI</Link>
            </li>

            <li>
              <Link to="/financial/">Financial</Link>
            </li>

            <li>
              <Link to="/foundation/">Foundation</Link>
            </li>

            <li>
              <Link to="/galactic/">Galactic</Link>
            </li>

            <li>
              <Link to="/genomics/">Genomics</Link>
            </li>

            <li>
              <Link to="/industries/">Industries</Link>
            </li>

            <li>
              <Link to="/media/">Media</Link>
            </li>

            <li>
              <Link to="/robotics/">Robotics</Link>
            </li>

            <li>
              <Link to="/security/">Security</Link>
            </li>

            <li>
              <Link to="/studio/">Studio</Link>
            </li>

            <li>
              <Link to="/technologies/">Technologies</Link>
            </li>

            <li>
              <Link to="/ventures/">Ventures</Link>
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
