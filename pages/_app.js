import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from "styled-components"
import '../styles/globals.css'
import { theme } from '../config/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return (<>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>)
}

export default MyApp
