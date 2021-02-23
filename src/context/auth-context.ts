import { createContext } from 'react'

export const AuthContext = createContext<any>({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})
