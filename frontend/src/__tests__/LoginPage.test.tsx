import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'

describe('LoginPage', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )

  it('muestra campos e información básica del formulario de login', () => {
    renderComponent()

    const botones = screen.getAllByRole('button')
    const cajasTexto = screen.getAllByRole('textbox')

    expect(botones.length).toBeGreaterThan(0)
    expect(cajasTexto.length).toBeGreaterThan(0)
  })

  it('permite intentar enviar el formulario sin romper la vista', () => {
    renderComponent()

    const botones = screen.getAllByRole('button')
    const botonPrincipal = botones[0]

    fireEvent.click(botonPrincipal)

    expect(botonPrincipal).toBeInTheDocument()
  })
})
