import { Section } from '../components/Section'
import type { Profile } from '../content/types'
import styles from './About.module.css'

interface AboutProps {
  profile: Pick<Profile, 'about' | 'education' | 'languages'>
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="sobre" index="01" title="Sobre">
      <div className={styles.grid}>
        <div className={styles.text} data-reveal>
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className={styles.aside} aria-label="Formação e idiomas">
          <h3 className={styles.label}>Formação</h3>
          <ul role="list" className={styles.education}>
            {profile.education.map((item) => (
              <li key={item.school} data-reveal>
                <p className={styles.school}>{item.school}</p>
                <p>{item.course}</p>
                {item.note && <p className={styles.muted}>{item.note}</p>}
                <p className={styles.meta}>
                  {item.place} · {item.period}
                </p>
              </li>
            ))}
          </ul>

          <h3 className={styles.label}>Idiomas</h3>
          <dl className={styles.languages}>
            {profile.languages.map((language) => (
              <div key={language.name}>
                <dt>{language.name}</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  )
}
