import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <header className={styles.header}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
