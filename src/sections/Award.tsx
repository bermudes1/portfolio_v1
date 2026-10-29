import { Section } from '../components/Section'
import type { Award as AwardData } from '../content/types'
import styles from './Award.module.css'

interface AwardProps {
  award: AwardData
}

export function Award({ award }: AwardProps) {
  return (
    <Section id="hackathon" index="03" title="hackathon">
      <div className={styles.grid}>
        <div className={styles.text} data-reveal>
          <p className={styles.place} aria-hidden="true">
            {award.place}
          </p>
          <h3 className={styles.title}>{award.title}</h3>
          <p className={styles.date}>{award.date}</p>
          {award.description && <p className={styles.description}>{award.description}</p>}
        </div>

        {award.photo && (
          <figure className={styles.figure} data-reveal>
            <img
              src={award.photo.src}
              alt={award.photo.alt}
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>
        )}
      </div>
    </Section>
  )
}
