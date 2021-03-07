import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado boilerplate</title>
        <link rel="apple-touch-icon" href="https://google.com.br" />
        <link rel="shortcut icon" href="https://google.com.br" />
        <meta
          name="description"
          content="A simple project starter to work with typescript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
