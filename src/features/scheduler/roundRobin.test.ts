import { describe, expect, it } from 'vitest'
import { countContextSwitches, roundRobin, type Job } from './roundRobin'

const job = (id: string, burst: number, arrival = 0): Job => ({
  id,
  arrival,
  burst,
})

describe('roundRobin', () => {
  it('alterna os processos respeitando o quantum', () => {
    const { slices } = roundRobin([job('A', 3), job('B', 2)], 1)

    expect(slices.map((s) => s.jobId)).toEqual(['A', 'B', 'A', 'B', 'A'])
  })

  it('calcula espera e turnaround de cada processo', () => {
    const { stats, averageWaiting, totalTime } = roundRobin([job('A', 4), job('B', 2)], 2)

    // A: 0-2, B: 2-4, A: 4-6
    expect(stats).toEqual([
      { id: 'A', finishedAt: 6, turnaround: 6, waiting: 2 },
      { id: 'B', finishedAt: 4, turnaround: 4, waiting: 2 },
    ])
    expect(averageWaiting).toBe(2)
    expect(totalTime).toBe(6)
  })

  it('coloca quem chegou durante a fatia antes do processo preemptado', () => {
    const { slices } = roundRobin([job('A', 4), job('B', 2, 1)], 2)

    expect(slices.map((s) => [s.jobId, s.start, s.end])).toEqual([
      ['A', 0, 2],
      ['B', 2, 4],
      ['A', 4, 6],
    ])
  })

  it('registra a CPU ociosa quando ninguém está pronto', () => {
    const { slices } = roundRobin([job('A', 1), job('B', 1, 3)], 2)

    expect(slices).toEqual([
      { jobId: 'A', start: 0, end: 1 },
      { jobId: null, start: 1, end: 3 },
      { jobId: 'B', start: 3, end: 4 },
    ])
  })

  it('junta fatias seguidas do mesmo processo', () => {
    const { slices } = roundRobin([job('A', 5)], 2)

    expect(slices).toEqual([{ jobId: 'A', start: 0, end: 5 }])
  })

  it('não quebra com a lista vazia', () => {
    expect(roundRobin([], 2)).toEqual({
      slices: [],
      stats: [],
      averageWaiting: 0,
      totalTime: 0,
    })
  })

  it.each([0, -1, 1.5])('rejeita quantum inválido (%s)', (quantum) => {
    expect(() => roundRobin([job('A', 1)], quantum)).toThrow(RangeError)
  })
})

describe('countContextSwitches', () => {
  it('conta só as trocas entre processos diferentes', () => {
    const { slices } = roundRobin([job('A', 3), job('B', 2)], 1)

    expect(countContextSwitches(slices)).toBe(4)
  })

  it('ignora o tempo ocioso entre dois processos', () => {
    const { slices } = roundRobin([job('A', 1), job('B', 1, 3)], 2)

    expect(countContextSwitches(slices)).toBe(1)
  })
})
