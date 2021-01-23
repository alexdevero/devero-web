import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="keywords" content="startups, products, company, innovation, technology, web design, web development, nanotechnology, financial, space, media, industries, robotics, security, ventures, ai, genomics" />

          <meta name="description" content="Devero corporation - build successful products and companies better and faster." />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />

          <link rel="manifest" href="/favicon/site.webmanifest" />

          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />

          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          <meta name="msapplication-TileColor" content="#000000" />

          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

          <meta name="theme-color" content="#000" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />

          {/* <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&amp;subset=latin-ext" rel="stylesheet" /> */}

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
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
