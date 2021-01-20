import React from 'react'
import Head from 'next/head'

import Footer from './footer'
import Header from './header'

interface LayoutUI {
  title: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutUI) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{props.title}</title>
      </Head>

      <div className="page-wrapper">
        <Header />

        <div className="page-content">
          <div className="container">{props.children}</div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Layout
