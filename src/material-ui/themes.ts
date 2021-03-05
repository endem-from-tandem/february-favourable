import { createMuiTheme } from '@material-ui/core'

const bp: any = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl', 'profile'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    profile: 820,
  },
}

const defaultTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        light: '#808080',
        main: '#262b30',
        dark: '#121517',
      },
      type: 'dark',
      secondary: {
        main: '#d84315',
        light: '',
        dark: '',
      },
      background: {
        paper: '#202428',
      },
      error: { main: '#e0391b' },
      text: {
        primary: '#ebebeb',
        secondary: '#808080',
      },
    },
    breakpoints: bp,
  })

//const darkColors = ['c6c3b5', '#343434', '262b30', '2f363c']
/*const gradients = [
  'linear-gradient(56deg, rgba(168,67,26,0.8733426476059174) 0%, rgba(47,54,60,0.9265639361213235) 100%)',
]*/

export default defaultTheme
