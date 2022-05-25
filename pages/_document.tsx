import Document, { Html, Head, Main, NextScript } from 'next/document';

const MainDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
};

export default MainDocument;
