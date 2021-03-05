import React from 'react'
import { Link } from 'react-router-dom'

import SignInModal from './navbar-sign-in-modal/'
import NavbarAuthenticated from './navbar-authenticated'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

//Toolbar & Drawer
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

//Icons
import Logo from '../../assets/img/logo.png'
import Menu from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) =>
  createStyles({
    // Toolbar
    appBar: {
      backgroundColor: theme.palette.primary.dark,
      '& .toolbarButton': {
        fontSize: 14,
        '& :hover': {
          color: theme.palette.secondary.light,
        },
        '& :active': {
          color: theme.palette.secondary.dark,
        },
        fontWeight: 'lighter',
      },
    },
    toolBar: {
      minHeight: 48,
    },

    menuButton: {
      marginRight: theme.spacing(1),
    },
    flexBox: {
      flexGrow: 1,
    },
  })
)

type NavbarType = {
  auth: boolean
}

const Navbar: React.FC<NavbarType> = ({ auth }) => {
  const classes = useStyles()
  //const navs = ['some', 'some_two', 'with_large_text']
  return (
    <AppBar className={classes.appBar} position='fixed' color='primary'>
      <Container disableGutters maxWidth='md'>
        <Toolbar className={classes.toolBar}>
          {/* Toggle  */}
          {false ? (
            <Box display={{ xs: 'block', md: 'none' }}>
              <IconButton
                className={classes.menuButton}
                edge='start'
                color='inherit'
                aria-label='app'
              >
                <Menu />
              </IconButton>
            </Box>
          ) : null}

          <IconButton
            style={{ height: '25px', width: '50px' }}
            component={Link}
            to='/'
            className={classes.menuButton}
            edge='start'
            color='inherit'
            aria-label='logo'
          >
            <img alt='logo' src={Logo} width='50px' height='25px' />
          </IconButton>
          <Box className={classes.flexBox} />
          {auth ? <NavbarAuthenticated /> : <SignInModal />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
