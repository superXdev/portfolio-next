import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/icons/favicon.ico"
            type="image/x-icon"
          />
          <meta name="description" content="I'am Nazir Bahrul Ulum 19 years old, a Front-end Web Developer."/>
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
