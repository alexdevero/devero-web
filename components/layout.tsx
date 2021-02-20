import Head from 'next/head'

import FooterBig from './footer-big'
import Header from './header'

interface LayoutUI {
  title: string;
  children: React.ReactNode;
  pageName?: string;
  isFluid?: boolean;
}

const Layout = (props: LayoutUI) => {
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
}

export default Layout
