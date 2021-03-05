import React, { useState, useRef } from 'react'

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from '../../../../utils/use-on-click-outside'
import { logOut } from '../../../../actions'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import SettingsIcon from '@material-ui/icons/Settings'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import default_avatar from '../../../../assets/img/profile-user.svg'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'relative',
    },
    profileButton: {
      '&:hover': {
        boxShadow: ` inset 0px 0px 4px 1px ${theme.palette.secondary.main} `,
      },
    },

    profileButtonActive: {
      boxShadow: ` inset 0px 0px 4px 1px ${theme.palette.secondary.main} `,
    },
    modal: {
      position: 'absolute',
      width: '150px',
      backgroundColor: theme.palette.primary.dark,

      padding: 5,
      paddingTop: '10px',
      borderRadius: '3px',
      '& button': {
        width: '100%',
        padding: '10px',
      },
    },
  })
)

const Menu = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const ref: any = useRef()
  const matchesWidth = useMediaQuery((theme: any) =>
    theme.breakpoints.down('xs')
  )
  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutside(ref, () => setModalOpen(false))

  const handleLogout = () => {
    localStorage.removeItem('userData')
    history.push('/')
    dispatch(logOut())
  }

  return (
    <div className={classes.container}>
      {!isModalOpen ? (
        <IconButton
          onClick={() => setModalOpen(true)}
          className={classes.profileButton}
          style={{
            height: '35px',
            width: '35px',
          }}
          edge='start'
          color='inherit'
          aria-label='logo'
        >
          <div
            style={{
              borderRadius: '50%',
              width: '65%',
              height: '65%',
              position: 'absolute',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${default_avatar})`,
            }}
          ></div>
        </IconButton>
      ) : (
        <div>
          <IconButton
            onClick={() => setModalOpen(false)}
            className={`${classes.profileButton} ${classes.profileButtonActive}`}
            style={{
              height: '35px',
              width: '35px',
            }}
            edge='start'
            color='inherit'
            aria-label='logo'
          >
            <div
              style={{
                borderRadius: '50%',
                width: '65%',
                height: '65%',
                position: 'absolute',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${default_avatar})`,
              }}
            ></div>
          </IconButton>
          <div
            className={classes.modal}
            style={
              matchesWidth
                ? { width: '100vw', right: '-15px' }
                : { width: '150px', right: '-24px' }
            }
            ref={ref}
          >
            <Button startIcon={<PermIdentityIcon />} size='small'>
              Profile
            </Button>
            <Button startIcon={<SettingsIcon />} size='small'>
              Setting
            </Button>
            <Button onClick={handleLogout} size='small' color='secondary'>
              Log out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
/*
// Hook
function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
*/
