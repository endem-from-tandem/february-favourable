import React from 'react'
import { Link } from 'react-router-dom'

import SignInModal from '../navbar-sign-in-modal/'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

//Toolbar & Driver
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'

import { Card, CardActions, CardContent } from '@material-ui/core'

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

const Navbar: React.FC = () => {
  const classes = useStyles()
  const navs = ['some', 'some_two', 'with_large_text']
  return (
    <>
      <AppBar className={classes.appBar} position='fixed' color='primary'>
        <Container disableGutters maxWidth='md'>
          <Toolbar className={classes.toolBar}>
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
            <SignInModal />
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ display: 'none' }}>
        <Typography style={{ marginTop: 10 }} variant='h3' color='textPrimary'>
          TextPrimary
        </Typography>
        <Typography variant='h3' color='textSecondary'>
          TextSecondary
        </Typography>
        <Card
          style={{
            width: '340px',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant='h5' component='h2'>
              Do it better will did faster
            </Typography>
            <Typography color='textSecondary'>adjective</Typography>
            <Typography variant='body2' component='p'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='secondary' variant='outlined' size='small'>
              Learn More
            </Button>
            <Button color='secondary' variant='contained' size='small'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Navbar
