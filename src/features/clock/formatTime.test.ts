import { describe, expect, it } from 'vitest'
import { formatTime } from './formatTime'

describe('formatTime', () => {
  const noonUtc = new Date('2026-10-29T12:00:00Z')

  it('converte para o fuso pedido', () => {
    expect(formatTime(noonUtc, 'Europe/Berlin')).toBe('13:00')
    expect(formatTime(noonUtc, 'America/Sao_Paulo')).toBe('09:00')
  })

  it('usa 24 horas com zero à esquerda', () => {
    expect(formatTime(new Date('2026-10-29T06:05:00Z'), 'UTC')).toBe('06:05')
  })
})
