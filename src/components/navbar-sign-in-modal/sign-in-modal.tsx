import React, { useRef } from 'react'

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
//import Tooltip from '@material-ui/core/Tooltip'

import CloseIcon from '@material-ui/icons/Close'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) =>
  createStyles({
    // redefinition of MUI classes
    DialogCustom: {
      '& .MuiDialog-paperWidthXs': {
        minWidth: '320px',
      },
      '& label.Mui-focused': { color: theme.palette.common.white },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.secondary.main,
      },
      '& .MuiDialog-paper': {
        boxShadow: '0px 0px 22px 9px rgba(15,14,15,0.75)',
      },
    },
    dialogForm: {
      '& .MuiTextField-root': {
        width: '90%',
      },
      '& .passwordField': {
        marginTop: '0px',
      },
    },

    dialogCloseButton: {
      color: theme.palette.error.main,
    },
    showPassButton: {
      color: theme.palette.primary.light,
    },
    flexBox: {
      flexGrow: 1,
    },
  })
)

type SignInModalType = {
  type: 'in' | 'up' | null
  open: boolean
  formData: any
  formSubmitted: any
  showPassword?: any
  showPasswordConfirm: any
  handleOpen: any
  handleSubmitted: any
  handleChange: any
  handleChangeType: any
  handleClose: any
  handleShowPassword: any
  handleShowPasswordConfirm: any
}

const SignInModal: React.FC<SignInModalType> = ({
  type,
  open,
  formData,
  formSubmitted,
  showPassword,
  showPasswordConfirm,
  handleOpen,
  handleClose,
  handleChange,
  handleChangeType,
  handleSubmitted,
  handleShowPassword,
  handleShowPasswordConfirm,
}) => {
  const signInForm = useRef(null)
  const classes = useStyles()
  return (
    <>
      <Button
        onClick={() => handleOpen('in')}
        className='toolbarButton'
        size='medium'
      >
        Sign In
      </Button>
      <Button
        onClick={() => handleOpen('up')}
        className='toolbarButton'
        size='medium'
      >
        Sign Up
      </Button>

      <Dialog
        className={classes.DialogCustom}
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        {/* Title section*/}
        <DialogTitle id='form-dialog-title'>
          <Box display='flex' flexDirection='row'>
            <Box className={classes.flexBox} />
            <IconButton
              onClick={handleClose}
              className={classes.dialogCloseButton}
              size='small'
            >
              <CloseIcon style={{ width: '40px', height: '40px' }} />
            </IconButton>
          </Box>

          <Box p={1}>
            <Typography variant='h4'>
              Sign{' '}
              <Box
                color={type === 'in' ? 'secondary.main' : null}
                component='span'
              >
                in
              </Box>
              /
              <Box
                color={type === 'up' ? 'secondary.main' : null}
                component='span'
              >
                up
                <Switch
                  disabled={formSubmitted}
                  checked={type === 'up'}
                  onChange={handleChangeType}
                  name='checkedA'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Box>
            </Typography>
          </Box>
        </DialogTitle>

        {/* Form section*/}
        <DialogContent style={{ marginBottom: '10px' }}>
          <ValidatorForm
            className={classes.dialogForm}
            ref={signInForm}
            onError={(e: any) => console.log(e)}
            onSubmit={handleSubmitted}
          >
            {type === 'up' ? (
              <>
                <TextValidator
                  margin='dense'
                  label='Name'
                  onChange={handleChange}
                  name='name'
                  value={formData.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  margin='dense'
                  label='Last Name'
                  onChange={handleChange}
                  name='lastname'
                  value={formData.lastname}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </>
            ) : null}

            <TextValidator
              margin='dense'
              label='Email'
              onChange={handleChange}
              name='email'
              value={formData.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <TextValidator
              className='passwordField'
              margin='dense'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              onChange={handleChange}
              name='password'
              value={formData.password}
              validators={['required']}
              errorMessages={['this field is required']}
              InputProps={{
                endAdornment: (
                  <IconButton
                    className={classes.showPassButton}
                    aria-label='toggle password visibility'
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <Visibility color='secondary' />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                ),
              }}
            />
            {type === 'up' ? (
              <TextValidator
                className='passwordField'
                margin='dense'
                type={showPasswordConfirm ? 'text' : 'password'}
                label='Confirm password'
                onChange={handleChange}
                name='confirm'
                value={formData.confirm}
                validators={['required', 'isPasswordMatch']}
                errorMessages={[
                  'this field is required',
                  'passwords not matches',
                ]}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      className={classes.showPassButton}
                      aria-label='toggle password visibility'
                      onClick={handleShowPasswordConfirm}
                    >
                      {showPasswordConfirm ? (
                        <Visibility color='secondary' />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  ),
                }}
              />
            ) : null}

            {/* Actions section*/}
            <Box mt={3}>
              <Button
                type='submit'
                disabled={formSubmitted}
                size='large'
                variant='outlined'
                color='secondary'
              >
                Sign {type}
              </Button>
              {type === 'in' ? (
                <Button size='large' disabled={formSubmitted}>
                  Forgot your password?
                </Button>
              ) : null}
            </Box>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SignInModal
