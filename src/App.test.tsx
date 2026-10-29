import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { profile } from './content/profile'

describe('App', () => {
  it('mostra o nome como título principal', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(profile.name)
  })

  it('tem um link do menu para cada seção existente', () => {
    const { container } = render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Seções' })

    for (const link of within(nav).getAllByRole('link')) {
      const id = link.getAttribute('href')!.slice(1)
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })

  it('lista todos os projetos e experiências do perfil', () => {
    render(<App />)

    for (const project of profile.projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    }
    for (const job of profile.experience) {
      expect(screen.getByRole('heading', { name: job.role })).toBeInTheDocument()
    }
  })

  it('oferece o e-mail como link de contato', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: profile.contact.email })).toHaveAttribute(
      'href',
      `mailto:${profile.contact.email}`,
    )
  })
})
