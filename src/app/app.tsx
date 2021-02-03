import React from 'react'
import Routes from '../routes/'
import './app.css'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../material-ui/themes'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Paper
        square
        style={{
          minHeight: '100vh',
          backgroundColor: '#262B30',
          paddingTop: 48,
        }}
      >
        <Routes auth={true} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
