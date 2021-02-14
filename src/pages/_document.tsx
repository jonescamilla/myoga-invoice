import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

/**
 * used to augment the application's `<html>` and `<body>` tags
 */
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <title>Myoga Invoice</title>
        <meta
          name="description"
          content="invoice system for local mechanic shop"
        ></meta>
        <Head />
        <body>
          {/* make color mode persistent throughout app when you refresh the page */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
