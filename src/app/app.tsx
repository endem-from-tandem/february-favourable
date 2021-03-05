import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { IInitialState } from '../reducers'

import Routes from '../routes/'

import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../material-ui/themes'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { signIn } from '../actions'

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

// Add/remove breackpoints in type
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    profile: true
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  const user: any = useSelector((state: IInitialState) => state.user)

  const [auth, setAuth] = useState<any>('preffer')

  const checkLocalStorage = (checkData: string) => {
    if (localStorage.getItem(checkData)) {
      const userData: any = localStorage.getItem(checkData)
      const json = JSON.parse(userData)
      return json
    }
    return false
  }

  const tokenPayloadParse = (token: string) => {
    let payload = token.split('.')[1]
    payload = JSON.parse(atob(payload))
    return payload
  }

  useEffect(() => {
    const user = checkLocalStorage('userData')
    if (user) {
      dispatch(signIn(tokenPayloadParse(user.token)))
    }
  }, [])

  useEffect(() => {
    if (typeof user === undefined) setAuth('prefer')
    else setAuth(!!user)
  }, [user])

  const classes = useStyles()

  return (
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
            minHeight: '101vh',
            backgroundColor: '#262B30',
            paddingTop: 58,
            paddingBottom: 15,
          }}
        >
          <Routes auth={auth} />
        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
