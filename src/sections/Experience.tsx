import { Section } from '../components/Section'
import type { Experience as ExperienceItem } from '../content/types'
import styles from './Experience.module.css'

interface ExperienceProps {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experiencia" index="02" title="Experiência">
      <ol role="list" className={styles.list}>
        {items.map((item) => (
          <li key={`${item.org}-${item.role}`} className={styles.item} data-reveal>
            <p className={styles.period}>
              {item.current && <span className={styles.now}>agora</span>}
              {item.period}
            </p>
            <div>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.org}>{item.org}</p>
            </div>
            <ul className={styles.description}>
              {item.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
