import { ThemeProvider, DefaultTheme } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'

import useRegisterState from './hooks/useRegisterState'

import AppRouter from './routes'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = useRegisterState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
