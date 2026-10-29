import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useId, useMemo, useRef, useState } from 'react'
import { countContextSwitches, roundRobin, type Job } from './roundRobin'
import styles from './SchedulerFigure.module.css'

// Os mesmos A1, A2, A3 do trabalho de SO, com chegadas e durações diferentes
// para o efeito do quantum aparecer.
const JOBS: Job[] = [
  { id: 'A1', arrival: 0, burst: 5 },
  { id: 'A2', arrival: 1, burst: 3 },
  { id: 'A3', arrival: 2, burst: 4 },
  { id: 'A4', arrival: 9, burst: 2 },
]

const QUANTA = [1, 2, 3, 4]

export function SchedulerFigure() {
  const [quantum, setQuantum] = useState(2)
  const schedule = useMemo(() => roundRobin(JOBS, quantum), [quantum])
  const switches = countContextSwitches(schedule.slices)
  const chart = useRef<HTMLDivElement>(null)
  const labelId = useId()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-slice]', {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.35,
          ease: 'power2.out',
          stagger: 0.04,
        })
      })
    },
    { scope: chart, dependencies: [quantum], revertOnUpdate: true },
  )

  const percent = (value: number) => `${(value / schedule.totalTime) * 100}%`

  return (
    <figure className={styles.figure}>
      <div className={styles.controls}>
        <span id={labelId} className={styles.controlLabel}>
          quantum
        </span>
        <div role="radiogroup" aria-labelledby={labelId} className={styles.quanta}>
          {QUANTA.map((q) => (
            <label key={q} className={styles.quantum}>
              <input
                type="radio"
                name={labelId}
                value={q}
                checked={q === quantum}
                onChange={() => setQuantum(q)}
              />
              <span>{q}</span>
            </label>
          ))}
        </div>
      </div>

      <div ref={chart} className={styles.chart} aria-hidden="true">
        {JOBS.map((job) => (
          <div key={job.id} className={styles.row}>
            <span className={styles.rowLabel}>{job.id}</span>
            <div className={styles.track}>
              <span
                className={styles.arrival}
                style={{ left: percent(job.arrival) }}
                title={`${job.id} chega em t=${job.arrival}`}
              />
              {schedule.slices
                .filter((slice) => slice.jobId === job.id)
                .map((slice) => (
                  <span
                    key={slice.start}
                    data-slice
                    className={styles.slice}
                    style={{
                      left: percent(slice.start),
                      width: percent(slice.end - slice.start),
                    }}
                  />
                ))}
            </div>
          </div>
        ))}
        <div className={styles.axis}>
          <span>t=0</span>
          <span>t={schedule.totalTime}</span>
        </div>
      </div>

      <ol className="visually-hidden">
        {schedule.slices.map((slice) => (
          <li key={slice.start}>
            {slice.jobId ?? 'CPU ociosa'} de t={slice.start} a t={slice.end}
          </li>
        ))}
      </ol>

      <figcaption className={styles.caption}>
        <span>Fig. 1. Round-Robin em TypeScript, a mesma política do simulador em C.</span>
        <span className={styles.stats} aria-live="polite">
          espera média{' '}
          {schedule.averageWaiting.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} ·{' '}
          {switches} trocas de contexto
        </span>
      </figcaption>
    </figure>
  )
}
