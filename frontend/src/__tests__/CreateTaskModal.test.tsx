import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { CreateTaskModal } from '../components/tasks/CreateTaskModal'

const getMock = vi.fn()
const postMock = vi.fn()

vi.mock('../services/http', () => ({
  http: {
    get: (...args: any[]) => getMock(...args),
    post: (...args: any[]) => postMock(...args),
  },
}))

describe('CreateTaskModal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('carga el listado de miembros cuando el modal se abre', async () => {
    getMock.mockResolvedValueOnce([
      { id: 1, name: 'User One', email: 'one@test.com' },
      { id: 2, name: 'User Two', email: 'two@test.com' },
    ])

    render(
      <CreateTaskModal
        open={true}
        projectId="1"
        onClose={() => {}}
        onCreated={() => {}}
      />
    )

    await waitFor(() => {
      // acepta tanto "Assignees" como "Asignados"
      expect(
        screen.getByText(/assignees|asignados/i)
      ).toBeInTheDocument()
    })

    expect(screen.getByText(/user one/i)).toBeInTheDocument()
    expect(screen.getByText(/user two/i)).toBeInTheDocument()
  })
})
