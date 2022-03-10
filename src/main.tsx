import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeSwitcherProvider } from './contexts/ThemeSwitcherContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
