import { useAuthStore } from '../store/authStore'

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface RequestOptions {
  method?: HttpMethod
  body?: unknown
  headers?: Record<string, string>
}

async function request<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {} } = options

  const token = useAuthStore.getState().token

  const finalHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (token) {
    (finalHeaders as Record<string, string>).Authorization = `Bearer ${token}`
  }

  const res = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: finalHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    let errorMessage = `Error HTTP ${res.status}`
    try {
      const data = await res.json()
      errorMessage = data.message || errorMessage
    } catch {
      
    }
    throw new Error(errorMessage)
  }

  return (await res.json()) as T
}

export const http = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: 'POST', body }),
  put: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: 'PUT', body }),
  patch: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: 'PATCH', body }),
  delete: <T>(url: string) => request<T>(url, { method: 'DELETE' }),
}
