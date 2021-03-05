import React from 'react'

import clsx from 'clsx'
import { Link, NavLink, Route } from 'react-router-dom'

import ProfileRoutes from '../../routes/profile-r'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import CardMedia from '@material-ui/core/CardMedia'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import EditIcon from '@material-ui/icons/Edit'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import GroupIcon from '@material-ui/icons/Group'
import ImageIcon from '@material-ui/icons/Image'
import SettingsIcon from '@material-ui/icons/Settings'
import defaultAvatar from '../../assets/img/default-avatar.svg'

import avatar from '../../assets/img/avatar.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: theme.breakpoints.values.profile,
    },
    card: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 15,
    },

    avatar: {
      height: 220,
      marign: '0 auto',
      width: 220,
    },
    content: {
      padding: ' 0 20px',
      ...theme.typography.overline,
    },
    actions: {
      display: 'block',
    },
    name: {
      textShadow: `0 0 2px  ${theme.palette.secondary.main}`,
      fontSize: 19,
      lineHeight: 1.7,
    },
    userDescription: {
      color: theme.palette.primary.light,
      fontSize: 13,
      marginTop: 15,
      lineHeight: 1.5,
    },
    userStatus: {
      color: theme.palette.secondary.light,
      lineHeight: 1.5,
      fontSize: 10,
      letterSpacing: 1.3,
      marginTop: 3,
    },

    card2: {
      marginTop: 15,
    },

    card2actions: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    icons: {
      color: theme.palette.secondary.main,
      width: 40,
      height: 40,
      borderRadius: 3,
      padding: 1,
    },

    activeIcon: {},

    card3: {
      maxWidth: 700,
      padding: 10,
      margin: '15px auto',
    },
  })
)

const Profile = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} disableGutters>
      <Card className={classes.card}>
        <CardMedia className={classes.avatar} image={avatar}></CardMedia>
        <Box maxWidth={430} display='flex'>
          <CardContent className={classes.content}>
            <Typography className={classes.name}>Endem from Tandem</Typography>
            <Typography className={classes.userStatus}>
              Lorem insult and die. This story is so sad...
            </Typography>
            <Typography className={classes.userDescription}>
              age: 20
              <br />
              gender: male
              <br />
              country: Tandem
              <br />
              lang: russian
              <br />
              live in: Dobropilya
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.actions}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>

      <Card className={classes.card2}>
        <CardActions className={classes.card2actions}>
          <IconButton
            component={NavLink}
            activeStyle={{
              boxShadow: '0 0 2px 1px #ebebeb',
              borderRadius: '2px',
            }}
            to='/id6033eca16bc3b72bc0bb628d/posts'
          >
            <FormatAlignLeftIcon className={classes.icons} color='inherit' />
          </IconButton>
          <IconButton
            component={NavLink}
            activeStyle={{
              boxShadow: '0 0 2px 1px #ebebeb',
              borderRadius: '2px',
            }}
            to='/id6033eca16bc3b72bc0bb628d/images'
          >
            <ImageIcon className={classes.icons} />
          </IconButton>
          <IconButton
            component={NavLink}
            activeStyle={{
              boxShadow: '0 0 2px 1px #ebebeb',
              borderRadius: '2px',
            }}
            to='/id6033eca16bc3b72bc0bb628d/friends'
          >
            <GroupIcon className={classes.icons} />
          </IconButton>
          <IconButton>
            <SettingsIcon
              style={{ color: 'white' }}
              className={classes.icons}
            />
          </IconButton>
        </CardActions>
      </Card>
      <Box mt={2}>
        <ProfileRoutes />
      </Box>
    </Container>
  )
}

export default Profile
