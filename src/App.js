import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'

// import About from './components/About'
// import Contact from './components/Contact'
import theme from './components/theme'

const App = () => {

  const Button = Styled.button`
    font-size: ${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme .colors.main};
    border: none;
  `
  return (
    <ThemeProvider theme = {theme}>
      <h1>Practicing styled components</h1>
      <Button>I'm themed!</Button>
      {/* <About />
      <Contact /> */}
    </ThemeProvider>
  )
}

export default App
