import Link from 'next/link'
import { memo } from 'react'

import { personalLinks, socialMediaLinks } from '../data/links'

export const FooterBig = memo(() => (
  <footer className="footer footer--big bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-5">
          <p className="m-0 h5">Say hello at <a href={personalLinks.mailto} className="text-body">hello@devero.io</a></p>

          <ul className="nav mt-1 mb-1 d-flex justify-content-flex-start">
            <li className="nav-item">
              <a href={socialMediaLinks.twitter} className="nav-link" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-twitter" />
              </a>
            </li>

            <li className="nav-item">
              <a href={socialMediaLinks.linkedin} className="nav-link" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a href={socialMediaLinks.facebook} className="nav-link" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-facebook-f" />
              </a>
            </li>

            <li className="nav-item">
              <a href={socialMediaLinks.github} className="nav-link" rel="noopener noreferrer" target="_blank">
                <span className="fab fa-github" />
              </a>
            </li>
          </ul>

          <p className="mt-1 mb-0 small">All rights reserved. Copyright &copy;2021 Devero Corporation.</p>
        </div>

        <div className="col-md-6 col-lg-7 mt-md-down-2">
          <div className="row">
            <div className="col-md-6">
              <ul className="nav d-flex flex-column small">
                <li className="h5 nav-item">Links</li>

                {/* <li className="nav-item">
                  <Link href="/about-us/">
                    <a className="nav-link p-1">About us</a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link href="/changelog/">
                    <a className="nav-link p-1">Changelog</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link p-1" href={personalLinks.blog} rel="noopener noreferrer" target="_blank">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <Link href="/privacy-policy/">
                    <a className="nav-link p-1">Privacy policy</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/terms-conditions/">
                    <a className="nav-link p-1">Terms &amp; conditions</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 mt-md-down-2">
              <ul className="nav d-flex flex-column small">
                <li className="h5 nav-item p-1">Prague</li>

                <li className="nav-item p-1">Pankrác</li>

                <li className="nav-item p-1">Praha 4, 140 00</li>

                <li className="nav-item p-1">Czech Republic</li>

                <li className="nav-item p-1"><a href={personalLinks.mailto} className="text-body border-bottom border-dark">hello@devero.io</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
))
