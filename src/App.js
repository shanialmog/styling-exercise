import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import theme from './theme/theme'
import GlobalStyles from './theme/globalStyles'

const Container = Styled.div`
    text-align: center;
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
  `
const App = () => {

  // const Button = Styled.button`
  //   font-size: ${({ theme }) => theme.fontSizes.medium};
  //   color: ${({ theme }) => theme.colors.main};
  //   border: none;
  // `
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container>
          <GlobalStyles />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
