export interface Job {
  id: string
  arrival: number
  burst: number
}

export interface Slice {
  /** null quando a CPU fica parada esperando alguém chegar. */
  jobId: string | null
  start: number
  end: number
}

export interface JobStats {
  id: string
  finishedAt: number
  turnaround: number
  waiting: number
}

export interface Schedule {
  slices: Slice[]
  stats: JobStats[]
  averageWaiting: number
  totalTime: number
}

export function roundRobin(jobs: readonly Job[], quantum: number): Schedule {
  if (!Number.isInteger(quantum) || quantum < 1) {
    throw new RangeError(`quantum precisa ser um inteiro >= 1, recebeu ${quantum}`)
  }

  const pending = [...jobs].sort((a, b) => a.arrival - b.arrival)
  const remaining = new Map(jobs.map((job) => [job.id, job.burst]))
  const finishedAt = new Map<string, number>()
  const ready: Job[] = []
  const slices: Slice[] = []
  let time = 0

  const admitArrivals = () => {
    while (pending.length > 0 && pending[0].arrival <= time) {
      ready.push(pending.shift()!)
    }
  }

  admitArrivals()

  while (ready.length > 0 || pending.length > 0) {
    if (ready.length === 0) {
      const next = pending[0].arrival
      slices.push({ jobId: null, start: time, end: next })
      time = next
      admitArrivals()
      continue
    }

    const job = ready.shift()!
    const left = remaining.get(job.id)!
    const run = Math.min(quantum, left)

    pushSlice(slices, { jobId: job.id, start: time, end: time + run })
    time += run
    remaining.set(job.id, left - run)

    // Igual ao kernel de verdade: quem chegou durante a fatia entra na fila
    // antes do processo que acabou de ser preemptado.
    admitArrivals()

    if (left - run > 0) {
      ready.push(job)
    } else {
      finishedAt.set(job.id, time)
    }
  }

  const stats = jobs.map((job) => {
    const end = finishedAt.get(job.id) ?? job.arrival
    const turnaround = end - job.arrival
    return {
      id: job.id,
      finishedAt: end,
      turnaround,
      waiting: turnaround - job.burst,
    }
  })

  const averageWaiting =
    stats.length === 0 ? 0 : stats.reduce((sum, s) => sum + s.waiting, 0) / stats.length

  return { slices, stats, averageWaiting, totalTime: time }
}

// Se o mesmo processo roda duas fatias seguidas (fila vazia), junta numa só.
// Fica mais fácil de desenhar e de ler.
function pushSlice(slices: Slice[], slice: Slice) {
  const last = slices.at(-1)
  if (last && last.jobId === slice.jobId && last.end === slice.start) {
    last.end = slice.end
  } else {
    slices.push(slice)
  }
}

/** Quantas vezes a CPU passou de um processo para outro. Ociosidade não conta. */
export function countContextSwitches(slices: readonly Slice[]): number {
  const running = slices.filter((slice) => slice.jobId !== null)
  return running.reduce(
    (count, slice, i) => (i > 0 && running[i - 1].jobId !== slice.jobId ? count + 1 : count),
    0,
  )
}
