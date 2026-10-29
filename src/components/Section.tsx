import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  index: string
  title: string
  /** Frase curta abaixo do título. */
  lead?: string
  children: ReactNode
}

export function Section({ id, index, title, lead, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <header className={styles.header} data-reveal>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <h2 id={headingId} className={styles.title}>
          {title}
          <span className={styles.period} aria-hidden="true">
            .
          </span>
        </h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </header>
      {children}
    </section>
  )
}
