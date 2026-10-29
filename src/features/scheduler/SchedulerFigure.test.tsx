import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SchedulerFigure } from './SchedulerFigure'

describe('SchedulerFigure', () => {
  it('começa com quantum 2 marcado', () => {
    render(<SchedulerFigure />)

    expect(screen.getByRole('radio', { name: '2' })).toBeChecked()
  })

  it('recalcula as métricas quando o quantum muda', async () => {
    render(<SchedulerFigure />)
    const stats = screen.getByText(/trocas de contexto/)
    const before = stats.textContent

    await userEvent.click(screen.getByRole('radio', { name: '1' }))

    expect(screen.getByRole('radio', { name: '1' })).toBeChecked()
    expect(stats.textContent).not.toBe(before)
  })
})
