import type { Stat } from '../content/types'
import styles from './Stats.module.css'

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section aria-label="Em números" className={styles.band}>
      <dl className={styles.list}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item} data-reveal>
            <dt className={styles.label}>{stat.label}</dt>
            <dd className={styles.value}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
