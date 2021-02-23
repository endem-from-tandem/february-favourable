import { useState, useCallback, useEffect } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const STORAGENAME: string = 'userData'

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(
      STORAGENAME,
      JSON.stringify({ userId: id, token: jwtToken })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(STORAGENAME)
  }, [])

  useEffect(() => {
    const json: any = localStorage.getItem(STORAGENAME)
    const data = JSON.parse(json)
    if (data && data.token) {
      login(data.token, data.userId)
    }
  }, [login])
  return { login, logout, token, userId }
}
