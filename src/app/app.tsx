import React from 'react'
import { SnackbarProvider } from 'notistack'
import Routes from '../routes/'
import './app.css'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../material-ui/themes'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) =>
  createStyles({
    error: { backgroundColor: '#222 !important', color: '#d84315 !important' },
  })
)

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <SnackbarProvider
        classes={{
          variantError: classes.error,
        }}
        maxSnack={3}
      >
        <Paper
          square
          style={{
            minHeight: '100vh',
            backgroundColor: '#262B30',
            paddingTop: 58,
          }}
        >
          <Routes auth={true} />
        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
