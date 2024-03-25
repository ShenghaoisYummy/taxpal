import { Html, Main, Head, NextScript } from "next/document";
export default function Document(props) {
  const pageProps = props.__NEXT_DATA__.props.pageProps;

  return (
    <Html lang={pageProps.lang} className="h-full bg-white sroll-smooth">
      <Head>
        <meta name="description" content={pageProps.description} />
        <meta name="keywords" content={pageProps.keywords} />
        <meta name="author" content={pageProps.author} />
        <link rel="icon" href="/favicon.co" />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
