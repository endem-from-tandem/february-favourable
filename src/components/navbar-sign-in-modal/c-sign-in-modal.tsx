import React, { useState, useEffect, useContext } from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import { VariantType, useSnackbar } from 'notistack'

import SignInModal from './sign-in-modal'
import { AuthContext } from '../../context/auth-context'
import { useHttp } from '../../utils/use-http'

const SignInModalContainer: React.FC = () => {
  const auth = useContext(AuthContext)
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

  const { error, request, clearError } = useHttp()

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
      clearError()
    }
  }, [error])

  const handleSubmitted = async (event: React.FormEvent) => {
    setFormSubmitted(true)
    try {
      const response = await request(`/api/auth/sign-${type}`, 'POST', formData)
      console.log(response)
      if (response.message === 'Пользователь создан') {
        enqueueSnackbar(response.message, { variant: 'success' })
        setType('in')
      }
      if (response.token) {
        setOpen(false)
        auth.login(response.token, response.userId)
      }
    } catch (e) {}
    setFormSubmitted(false)
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
