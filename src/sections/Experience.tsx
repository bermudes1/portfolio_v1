import { Section } from '../components/Section'
import type { Experience as ExperienceItem } from '../content/types'
import styles from './Experience.module.css'

interface ExperienceProps {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experiencia" index="02" title="experiência">
      <ol role="list" className={styles.timeline}>
        {items.map((item) => (
          <li
            key={`${item.org}-${item.role}`}
            className={styles.item}
            data-current={item.current ?? false}
            data-reveal
          >
            <div className={styles.meta}>
              <p className={styles.period}>{item.period}</p>
              {item.current && <span className={styles.now}>agora</span>}
            </div>
            <div className={styles.card}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.org}>{item.org}</p>
              <ul className={styles.description}>
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
