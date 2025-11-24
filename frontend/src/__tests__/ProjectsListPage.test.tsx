import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProjectsListPage } from '../pages/projects/ProjectsListPage'

const getMock = vi.fn()

vi.mock('../services/http', () => ({
  http: {
    get: (...args: any[]) => getMock(...args),
  },
}))

vi.mock('../store/authStore', () => ({
  useAuthStore: (selector: any) =>
    selector({
      user: { name: 'Test User', email: 'test@example.com' },
      token: 'fake-token',
      setUser: vi.fn(),
      logout: vi.fn(),
    }),
}))

describe('ProjectsListPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderComponent = () =>
    render(
      <MemoryRouter>
        <ProjectsListPage />
      </MemoryRouter>
    )

  it('carga proyectos desde la API y los muestra en la lista', async () => {
    getMock.mockResolvedValueOnce([
      { id: '1', name: 'Project A', description: 'Desc A' },
      { id: '2', name: 'Project B', description: 'Desc B' },
    ])

    renderComponent()

    await waitFor(() => {
      expect(getMock).toHaveBeenCalled()
      expect(screen.getByText('Project A')).toBeInTheDocument()
      expect(screen.getByText('Project B')).toBeInTheDocument()
    })
  })

  it('permite escribir en la caja de búsqueda sin errores', async () => {
    getMock.mockResolvedValueOnce([
      { id: '1', name: 'Project A', description: 'Desc A' },
      { id: '2', name: 'Project B', description: 'Desc B' },
    ])

    renderComponent()

    await waitFor(() => {
      expect(screen.getByText('Project A')).toBeInTheDocument()
    })

    const buscador =
      screen.queryByPlaceholderText(/search/i) ||
      screen.getAllByRole('textbox')[0]

    fireEvent.change(buscador, { target: { value: 'Project' } })

    expect((buscador as HTMLInputElement).value).toBe('Project')
  })
})
