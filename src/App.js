import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'

// import About from './components/About'
// import Contact from './components/Contact'
import theme from './theme/theme'
import GlobalStyles from './theme/globalStyles'

const App = () => {

  const Button = Styled.button`
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.main};
    border: none;
  `
  const Container = Styled.div`
    text-align: center;
  `


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <h1>Practicing styled components</h1>
        <Button>I'm themed!</Button>
        {/* <About />
      <Contact /> */}
      </Container>
    </ThemeProvider>
  )
}

export default App
