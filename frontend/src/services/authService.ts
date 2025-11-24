import { http } from './http'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
  }
  token: string
}

interface RegisterPayload {
  name: string
  email: string
  password: string
}

export const authService = {
  login: (data: LoginPayload) =>
    http.post<LoginResponse>('/auth/login', data),
  register: (data: RegisterPayload) =>
    http.post<LoginResponse>('/auth/register', data),
}
