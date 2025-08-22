import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Ako imaš PNG verziju */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        {/* Za Apple/ios support */}
        {/* <link rel="apple-touch-icon" href="/favicon.png" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
