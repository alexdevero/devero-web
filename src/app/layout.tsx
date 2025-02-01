import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import clsx from 'clsx'
// eslint-disable-next-line camelcase
import { Bebas_Neue, Roboto, Roboto_Condensed } from 'next/font/google'
import { AppContext } from '@contexts/appContext'

import '@styles/globals.css'
import '@styles/styles.scss'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  style: ['normal', 'italic'],
  display: 'swap',
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Devero',
  description:
    'Devero corporation - build successful products and companies better and faster.',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        bebasNeue.variable,
        roboto.variable,
        robotoCondensed.variable,
      )}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
          integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  )
}
