import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeSwitcherProvider } from './contexts/ThemeSwitcherContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
