import { Section } from '../components/Section'
import type { Profile } from '../content/types'
import styles from './Skills.module.css'

interface SkillsProps {
  profile: Pick<Profile, 'skills' | 'certifications'>
}

export function Skills({ profile }: SkillsProps) {
  return (
    <Section id="competencias" index="05" title="Competências">
      <dl className={styles.grid}>
        {profile.skills.map((group) => (
          <div key={group.title} className={styles.group} data-reveal>
            <dt className={styles.label}>{group.title}</dt>
            {group.items.map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </div>
        ))}
        <div className={styles.group} data-reveal>
          <dt className={styles.label}>Certificados</dt>
          {profile.certifications.map((item) => (
            <dd key={item}>{item}</dd>
          ))}
        </div>
      </dl>
    </Section>
  )
}
