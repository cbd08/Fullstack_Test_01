import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../routes/ProtectedRoute'

const mockStore = vi.fn()

vi.mock('../store/authStore', () => ({
  useAuthStore: (selector: any) => selector(mockStore()),
}))

describe('ProtectedRoute', () => {
  it('redirige al login si el usuario no está autenticado', () => {
    mockStore.mockReturnValueOnce({
      user: null,
      token: null,
      setUser: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <MemoryRouter initialEntries={['/privado']}>
        <Routes>
          <Route
            path="/privado"
            element={
              <ProtectedRoute>
                <div>Página privada</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Página de login</div>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText(/página de login/i)).toBeInTheDocument()
  })
})
