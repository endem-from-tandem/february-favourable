import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn } from '../../../actions'

import { ValidatorForm } from 'react-material-ui-form-validator'
import { useSnackbar } from 'notistack'

import SignInModal from './sign-in-modal'
//import { AuthContext } from '../../context/auth-context'
import { useHttp } from '../../../utils/use-http'

const SignInModalContainer: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'in' | 'up' | null>(null)

  const handleOpen = (type: 'in' | 'up' | null) => {
    setOpen(true)
    setType(type)
  }
  const handleClose = () => {
    setOpen(false)
  }
  //modal form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
    lastname: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleChangeType = () => {
    setType(type === 'in' ? 'up' : 'in')
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false)
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm)
  }

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value: string) => {
      if (value !== formData.password) {
        return false
      }
      return true
    })
  }, [formData])

  const { error, request, clearError } = useHttp()

  // AJAX

  const tokenPayloadParse = (token: string) => {
    let payload = token.split('.')[1]
    payload = JSON.parse(atob(payload))
    return payload
  }

  const handleSubmitted = async () => {
    setFormSubmitted(true)
    await handleRequest()
    setFormSubmitted(false)
  }

  const handleRequest = async () => {
    try {
      const response = await request(`/api/auth/sign-${type}`, 'POST', formData)

      if (response.message === 'Пользователь создан') {
        enqueueSnackbar(response.message, { variant: 'success' })
        setType('in')
      }
      if (response.token) {
        handleSignIn(response.token)
        setOpen(false)
      }
    } catch (e) {}
  }

  const handleSignIn = (jwtToken: string) => {
    localStorage.setItem('userData', JSON.stringify({ token: jwtToken }))
    const payload: any = tokenPayloadParse(jwtToken)
    const id = payload.userId
    history.push(`id${id}`)
    dispatch(signIn(payload))
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
      clearError()
    }
  }, [error])

  return (
    <SignInModal
      type={type}
      open={open}
      formData={formData}
      formSubmitted={formSubmitted}
      showPassword={showPassword}
      showPasswordConfirm={showPasswordConfirm}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleChange={handleChange}
      handleChangeType={handleChangeType}
      handleSubmitted={handleSubmitted}
      handleShowPassword={handleShowPassword}
      handleShowPasswordConfirm={handleShowPasswordConfirm}
    />
  )
}

export default SignInModalContainer
