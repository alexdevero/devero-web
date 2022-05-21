import { memo, ReactNode } from 'react'
import Head from 'next/head'

import { FooterBig } from './footer-big'
import { Header } from './header'

interface LayoutUI {
  title: string;
  children: ReactNode;
  pageName?: string;
  isFluid?: boolean;
}

export const Layout = memo((props: LayoutUI) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{props.title}</title>
      </Head>

      <div className={`page-wrapper${props.pageName ? ' ' + props.pageName : ''}`}>
        <Header />

        <div className="page-content">
          <div className={`container${props.isFluid ? '-fluid' : ''}`}>{props.children}</div>
        </div>

        <FooterBig />
      </div>
    </>
  )
})
