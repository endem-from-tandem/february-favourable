const signIn = (user: any) => {
  return {
    type: 'USER_SIGN_IN',
    payload: user,
  }
}

const logOut = () => {
  return {
    type: 'USER_LOG_OUT',
  }
}

export { signIn, logOut }
