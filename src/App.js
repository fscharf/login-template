import React from 'react'
import GlobalStyles from './components'
import Routes from './routes'
import { GlobalProvider } from './context'

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyles />

      <Routes />
    </GlobalProvider>
  )
}

export default App
