import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Ako imaš PNG verziju */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        {/* Za Apple/ios support */}
        {/* <link rel="apple-touch-icon" href="/favicon.png" /> */}

        {/* ✅ Google Ads / Analytics tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17116231799"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17116231799');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
