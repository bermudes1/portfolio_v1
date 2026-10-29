import { Section } from '../components/Section'
import type { Profile } from '../content/types'
import styles from './About.module.css'

interface AboutProps {
  profile: Pick<Profile, 'about' | 'aboutImage' | 'education' | 'languages'>
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="sobre" index="01" title="sobre mim">
      <div className={styles.grid}>
        <figure className={styles.photo} data-reveal>
          <img
            src={profile.aboutImage.src}
            alt={profile.aboutImage.alt}
            width={900}
            height={1125}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className={styles.column}>
          <div className={styles.text} data-reveal>
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <h3 className={styles.label}>Formação</h3>
          <ul role="list" className={styles.education}>
            {profile.education.map((item) => (
              <li key={item.school} className={styles.card} data-reveal>
                <p className={styles.period}>{item.period}</p>
                <p className={styles.school}>{item.school}</p>
                <p>{item.course}</p>
                {item.note && <p className={styles.muted}>{item.note}</p>}
                <p className={styles.muted}>{item.place}</p>
              </li>
            ))}
          </ul>

          <h3 className={styles.label}>Idiomas</h3>
          <ul role="list" className={styles.languages}>
            {profile.languages.map((language) => (
              <li key={language.name}>
                {language.name} <span>{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
