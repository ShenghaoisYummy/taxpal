import { Html, Main, Head, NextScript } from "next/document";
export default function Document(props) {
  const pageProps = props.__NEXT_DATA.props.pageProps;

  return (
    <Html lang={pageProps.lang}>
      <Head>
        <meta name="description" content={pageProps.description} />
        <meta name="keywords" content={pageProps.keywords} />

        <meta name="author" content={pageProps.author} />
        <link rel="icon" href="/favicon.co" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
