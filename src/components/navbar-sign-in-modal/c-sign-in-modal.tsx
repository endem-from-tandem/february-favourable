import React, { useState } from 'react'
import SignInModal from './sign-in-modal'

const SignInModalContainer: React.FC = () => {
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
    lastName: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleChangeType = () => {
    setType(type === 'in' ? 'up' : 'in')
  }
  const handleSubmitted = (event: React.FormEvent) => {
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
    }, 1000)
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false)
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm)
  }
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
