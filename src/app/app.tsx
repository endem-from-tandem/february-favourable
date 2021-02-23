import React from 'react'
import './app.css'

import Routes from '../routes/'
import { useAuth } from '../utils/use-auth'

import { SnackbarProvider } from 'notistack'
import { AuthContext } from '../context/auth-context'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../material-ui/themes'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) =>
  createStyles({
    error: {
      backgroundColor: '#222 !important',
      color: '#d84315 !important',
    },
    success: {
      backgroundColor: '#222 !important',
      color: '#d84315 !important',
    },
  })
)

const App: React.FC = () => {
  const { token, login, logout, userId } = useAuth()
  const classes = useStyles()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <SnackbarProvider
          classes={{
            variantError: classes.error,
            variantSuccess: classes.success,
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
            <Routes auth={isAuthenticated} />
          </Paper>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default App
