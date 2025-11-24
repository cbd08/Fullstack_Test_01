import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (payload: { user: User; token: string }) => void
  logout: () => void
  hydrate: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: ({ user, token }) =>
    set(() => {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      return { user, token, isAuthenticated: true }
    }),

  logout: () =>
    set(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return { user: null, token: null, isAuthenticated: false }
    }),

  hydrate: () =>
    set(() => {
      const token = localStorage.getItem('token')
      const userStr = localStorage.getItem('user')
      if (!token || !userStr) {
        return { user: null, token: null, isAuthenticated: false }
      }
      try {
        const user = JSON.parse(userStr) as User
        return { user, token, isAuthenticated: true }
      } catch {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return { user: null, token: null, isAuthenticated: false }
      }
    }),
}))
