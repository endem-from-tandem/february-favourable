import { createMuiTheme } from '@material-ui/core'

const defaultTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#262b30',
        dark: '#121517',
      },
      secondary: {
        main: '#d84315',
        light: '',
        dark: '',
      },
      background: {
        paper: '#202428',
      },
      text: {
        primary: '#ebebeb',
        secondary: '#808080',
      },
    },
  })

const darkColors = ['c6c3b5', '#343434', '262b30', '2f363c']
const gradients = [
  'linear-gradient(56deg, rgba(168,67,26,0.8733426476059174) 0%, rgba(47,54,60,0.9265639361213235) 100%)',
]
export default defaultTheme
