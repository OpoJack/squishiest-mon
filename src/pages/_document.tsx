import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const description = "Who's the squishiest of them all? Cast your vote?";
    const title = "Squishy Pokémon";
    return (
      <Html>
        <Head>
          <meta name='description' content={description} />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='theme-color' content='#000000' />

          <meta
            name='apple-mobile-web-app-title'
            content='Battle for the squish'
          />
          <meta name='application-name' content='Battle for the squish' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
