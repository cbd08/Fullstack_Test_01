import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { DashboardPage } from '../pages/dashboard/DashboardPage'

const getMock = vi.fn()

vi.mock('../services/http', () => ({
  http: {
    get: (...args: any[]) => getMock(...args),
  },
}))

describe('DashboardPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('muestra las métricas del dashboard correctamente', async () => {
    getMock.mockResolvedValueOnce({
      projectsCount: 2,
      tasksCount: 5,
      tasksByStatus: { todo: 2, in_progress: 2, done: 1 },
      recentProjects: [
        { id: 1, name: 'Proyecto Alfa', taskCount: 3 },
        { id: 2, name: 'Proyecto Beta', taskCount: 2 },
      ],
    })

    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    )

    expect(screen.getByText(/cargando dashboard/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/dashboard/i)).toBeInTheDocument()

      expect(screen.getByText('Proyectos')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()

      expect(screen.getByText('Total de Tareas')).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()

      expect(screen.getByText('Completado')).toBeInTheDocument()
      expect(screen.getByText('1 / 5')).toBeInTheDocument()

      expect(screen.getByText(/tareas por estado/i)).toBeInTheDocument()

      expect(screen.getByText(/proyectos recientes/i)).toBeInTheDocument()
      expect(screen.getByText(/proyecto alfa/i)).toBeInTheDocument()
      expect(screen.getByText(/proyecto beta/i)).toBeInTheDocument()
    })
  })
})
